import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAlunos } from "../../servicos/alunos";

const SessaoPesquisa = styled.section`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

const TituloPesquisa = styled.h1`
  font-size: 30pt;
`;

const TextosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;

const CampoPesquisa = styled.input`
  width: 50%;
  height: 35px;
  border-radius: 50px;
  border: 1px solid #000;
  padding: 0 50px;
  outline: none;
`;

const ResultadoPesquisa = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ImagemAluno = styled.img`
  max-width: 100px;
`;

const ListaDeAlunos = styled.ul`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemLista = styled.li`
  flex: 0 1 calc(33.333% - 28px);
  box-sizing: border-box;
  border: 1px solid rgb(155, 155, 155);
  padding: 16px;
  text-align: center;
`;

function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState([]);
  const [listaAlunos, setListaAlunos] = useState([]);

  useEffect(() => {
    pegaAlunos();
  }, []);

  async function pegaAlunos() {
    const alunosAPI = await getAlunos();
    setListaAlunos(alunosAPI);
  }

  async function pegaValor(e) {
    setTextoDigitado(e.target.value.toLowerCase());
  }

  return (
    <SessaoPesquisa>
      <TextosContainer>
        <TituloPesquisa>Descubra o aluno</TituloPesquisa>
        <p>
          Digite aqui para descobrir quais alunos estudam na estudam na escola
        </p>
      </TextosContainer>
      <CampoPesquisa
        onChange={pegaValor}
        className="input"
        type="text"
        placeholder="Digite o nome do aluno: "
      />
      <ResultadoPesquisa>
        <ListaDeAlunos>
          {listaAlunos
            .filter((aluno) => aluno.nome.toLowerCase().includes(textoDigitado))
            .map((aluno, i) => (
              <ItemLista key={i}>
                <ImagemAluno src={aluno.foto} alt="" />
                <h2>{aluno.nome}</h2>
                <p>{aluno.idade}</p>
              </ItemLista>
            ))}
        </ListaDeAlunos>
      </ResultadoPesquisa>
    </SessaoPesquisa>
  );
}

export default Pesquisa;
