import { prop, getModelForClass } from "@typegoose/typegoose";

class Url {
    @prop({ type: String, required: true })
    hash!: string;

    @prop({ type: String, required: true })
    originUrl!: string;

    @prop({ type: String, required: true })
    shortUrl!: string;
}

export const UrlModel = getModelForClass(Url);