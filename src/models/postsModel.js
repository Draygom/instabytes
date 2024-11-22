import dbConnection from "../config/dbConfig.js";

const connection = await dbConnection(process.env.CONNECTION_STRING);

export async function getAllPosts() {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  return collection.find().toArray();
}

export async function createPost(newPost) {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  return collection.insertOne(newPost);
}
