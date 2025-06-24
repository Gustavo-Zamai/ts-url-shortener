import { getModelForClass, prop } from '@typegoose/typegoose';

class Url {
  @prop({ type: String, required: true })
  public hash!: string;

  @prop({ type: String, required: true })
  public originUrl!: string;

  @prop({ type: String, required: true })
  public shortUrl!: string;
}

export const UrlModel = getModelForClass(Url);
