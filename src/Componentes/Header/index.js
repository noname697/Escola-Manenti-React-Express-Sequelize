import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 0 50px;
`;

const Titulo = styled.h1`
  font-size: 22pt;
`;

const ListaContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;
`;

const ItemLista = styled.li`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgb(63, 63, 63);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Titulo>Escola Manenti</Titulo>
      <ListaContainer>
        <ItemLista>Alunos</ItemLista>
        <ItemLista>Professores</ItemLista>
        <ItemLista>Disciplinas</ItemLista>
      </ListaContainer>
    </HeaderContainer>
  );
}

export default Header;
