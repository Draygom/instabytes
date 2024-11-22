import { getAllPosts, createPost } from "../models/postsModel.js";

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
