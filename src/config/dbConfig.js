import { MongoClient } from "mongodb";

export default async function dbConnection(connectionString) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectionString);
    console.log("Conectando ao cluster do banco de dados");
    await mongoClient.connect();
    console.log("Conactado ao MongoDB Atlas com sucesso!");

    return mongoClient;
  } catch (error) {
    console.error("Falha na conexão com o banco!", error);
    process.exit();
  }
}
