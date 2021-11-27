import { connect } from 'mongoose';
import { ClientFactory } from '../ClienteFactory';

export class MongoClientFactory implements ClientFactory<void> {  
    constructor(private url: string) {};

    async init(): Promise<void> {
        try {
            await connect(this.url);
        } catch (error) {
            console.log(error);
            throw new Error("Error in the Mongo DB setup")
        }
    }
}

export const mongoClient = new MongoClientFactory('mongodb+srv://estcar:kjkszpj08@cluster0.t1olg.mongodb.net/salespoint?retryWrites=true&w=majority');