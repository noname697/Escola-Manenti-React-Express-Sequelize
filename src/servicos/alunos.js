import axios from "axios";

const alunosAPI = axios.create({ baseURL: "http://localhost:8000/" });

function getAlunos() {
  const response = alunosAPI.get("/");

  return response.data;
}

export { getAlunos };
