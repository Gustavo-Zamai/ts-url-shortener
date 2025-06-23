import { Request, Response } from 'express';
import shortid from 'shortid';
import { config } from '../config/constants'
import { UrlModel } from '../model/url-model';

export class URLController{
    public async shortener(req: Request, res: Response): Promise<void>{
        //verify URL
        const { originUrl } = req.body
        const url = await UrlModel.findOne({ originUrl})
        if (url) {
            res.json(url);
            return
        }
        
        //create hash to URL 
        const hash = shortid.generate();
        const shortUrl = `${config.API_URL}/${hash}`;

        //save URL into Database
        const newUrl = await UrlModel.create({ hash, shortUrl, originUrl})
        res.json(newUrl);
        //return URL 
        res.json({ originUrl, hash, shortUrl})
    }

    public async redirect(req: Request, res: Response): Promise<void>{
         //catch hash error
        const { hash } = req.params;

        //
        const urlRecord = await UrlModel.findOne({ hash })
        if (urlRecord){
            res.redirect(urlRecord.originUrl)
            return
        }
        res.status(400).json({ error: 'URL not found'})

         //find original URL
         const url = {
             originURL: ' ',
             hash: ' ',
             shortURL: ' ',
         }
         //redirect to original URL
         res.redirect(url.originURL)
         
    }
}