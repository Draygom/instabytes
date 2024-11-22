import express from "express";
import multer from "multer";
import {
  listAllPosts,
  postPost,
  uploadImage,
} from "../controllers/postsController.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listAllPosts);
  app.post("/posts", postPost);
  app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
