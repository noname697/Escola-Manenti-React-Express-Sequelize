import axios from "axios";

const alunosAPI = axios.create({ baseURL: "http://localhost:8000/" });

async function getAlunos() {
  const response = await alunosAPI.get("/");

  return response.data;
}

export { getAlunos };
