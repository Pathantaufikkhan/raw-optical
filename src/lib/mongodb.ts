// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // in .env.local
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Add your Mongo URI to .env.local');
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
