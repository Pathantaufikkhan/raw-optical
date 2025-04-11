// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // from .env.local
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Add your Mongo URI to .env.local');
}


const client = new MongoClient(uri, options);      // changed from let ➝ const
const clientPromise = client.connect();            // changed from let ➝ const

export default clientPromise;
