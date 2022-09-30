import { MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}
if (!process.env.MONGODB_DB) {
  throw new Error('Invalid environment variable: "MONGODB_DB"');
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {
  serverApi: ServerApiVersion.v1,
};

let client;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}
if (!process.env.MONGODB_DB) {
  throw new Error("Please add your Mongo Database to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
