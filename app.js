const express = require("express");
const { Aluno } = require("./models");
const cors = require('cors')

const app = express();
app.use(cors({origin: "*"}))

app.get("/", async (req, res) => {
  const listaAlunos = await Aluno.findAll();
  res.status(200).send(listaAlunos);
});

app.listen(8000, console.log('Escutando'))