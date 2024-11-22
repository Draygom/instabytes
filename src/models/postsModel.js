import dbConnection from "../config/dbConfig.js";

const connection = await dbConnection(process.env.CONNECTION_STRING);

export default async function getAllPosts() {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  return collection.find().toArray();
}
