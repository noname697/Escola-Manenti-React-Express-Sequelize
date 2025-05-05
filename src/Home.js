import styled from "styled-components";
import Header from "./Componentes/Header";
import Pesquisa from "./Componentes/Pesquisa";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default Home;
