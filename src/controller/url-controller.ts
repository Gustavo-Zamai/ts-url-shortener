import { Request, Response } from 'express';
import shortid from 'shortid';
import { config } from '../config/constants';
import { UrlModel } from '../model/url-model';

export class URLController {
  public async shortener(req: Request, res: Response): Promise<void> {
    const { originUrl } = req.body;

    // Verifica se a URL já existe
    const url = await UrlModel.findOne({ originUrl });
    if (url) {
      res.json(url);
      return;
    }

    // Cria a URL curta
    const hash = shortid.generate();
    const shortUrl = `${config.API_URL}/${hash}`;

    // Salva no banco
    const newUrl = await UrlModel.create({ hash, originUrl, shortUrl });

    // Retorna APENAS UMA VEZ
    res.json(newUrl);
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    //catch hash error
    const { hash } = req.params;

    //
    const urlRecord = await UrlModel.findOne({ hash });
    if (urlRecord) {
      res.redirect(urlRecord.originUrl);
      return;
    }
    res.status(400).json({ error: 'URL not found' });

    //find original URL
    const url = {
      originURL: ' ',
      hash: ' ',
      shortURL: ' ',
    };
    //redirect to original URL
    res.redirect(url.originURL);
  }
}
