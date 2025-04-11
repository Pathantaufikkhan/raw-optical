// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error('Add your Mongo URI to .env.local');
}

const options = {};

let client;
let clientPromise: Promise<MongoClient>;

// In development, use a global variable so that we don’t create a new client on every hot reload
if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, don't use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
