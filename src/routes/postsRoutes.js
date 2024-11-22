import express from "express";
import multer from "multer";
import cors from "cors";
import {
  listAllPosts,
  postPost,
  updateNewPost,
  uploadImage,
} from "../controllers/postsController.js";

const upload = multer({ dest: "./uploads" });
const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));

  app.get("/posts", listAllPosts);
  app.post("/posts", postPost);
  app.post("/upload", upload.single("image"), uploadImage);
  app.put("/upload/:id", updateNewPost);
};

export default routes;
