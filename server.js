import express from "express";

const posts = [
  {
    id: 1,
    descrição: "Um gatinho fofo",
    imagem: "https://placecats.com/312/225",
  },
  {
    id: 2,
    descrição: "Gato curioso",
    imagem: "https://placecats.com/280/190",
  },
  {
    id: 3,
    descrição: "Gatinho ronronando",
    imagem: "https://placecats.com/350/250",
  },
  {
    id: 4,
    descrição: "Gato brincando com um novelo de lã",
    imagem: "https://placecats.com/200/150",
  },
  {
    id: 5,
    descrição: "Gato tomando sol",
    imagem: "https://placecats.com/400/300",
  },
  {
    id: 6,
    descrição: "Gato dormindo",
    imagem: "https://placecats.com/250/175",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});
