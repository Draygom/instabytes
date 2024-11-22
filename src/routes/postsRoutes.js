import express from "express";
import { listAllPosts, postPost } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listAllPosts);
  app.post("/posts", postPost);
};

export default routes;
