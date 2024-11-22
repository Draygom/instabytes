import fs from "fs";
import { getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import genereteDescriptionWithGemini from "../services/geminiService.js";

export async function listAllPosts(req, res) {
  const posts = await getAllPosts();

  res.status(200).json(posts);
}

export async function postPost(req, res) {
  const newPost = req.body;

  try {
    const postCreated = await createPost(newPost);

    res.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ Erro: "Falha ao criar post" });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const postCreated = await createPost(newPost);
    const imageUpdated = `uploads/${postCreated.insertedId}.png`;
    fs.renameSync(req.file.path, imageUpdated);

    res.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ Erro: "Falha ao subir imagem" });
  }
}

export async function updateNewPost(req, res) {
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`;

  try {
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
    const description = await genereteDescriptionWithGemini(imageBuffer);
    const post = {
      imgUrl: urlImage,
      description: description,
      alt: req.body.alt,
    };
    const postCreated = await updatePost(id, post);

    res.status(200).json(postCreated);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ Erro: "Falha ao criar post" });
  }
}
