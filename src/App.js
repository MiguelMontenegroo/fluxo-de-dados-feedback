import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("")
  const [foto, setFoto] = useState("")
  const [titulo, setTitulo] = useState("")
  const [foto2, setFoto2] = useState("")
  const [descricao, setDescricao] = useState("")
  


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
          nome={nome}
          foto={foto} />
          {pageFlow === 1 ? (
            <FormularioLogin 
            setPageFlow={setPageFlow}
            nome={nome}
            foto={foto} 
            setNome={setNome}
            setFoto={setFoto}/>
          ) : (
            <FormularioPostagem 
            titulo={titulo}
            foto2={foto2}
            descricao={descricao}
            setTitulo={setTitulo}
            setFoto2={setFoto2}
            setDescricao={setDescricao}/>
          )}
        </aside>
        <TelaDaPostagem 
        titulo={titulo}
        foto2={foto2}
        descricao={descricao}
        setTitulo={setTitulo}
            setFoto2={setFoto2}
            setDescricao={setDescricao}/>
      </Container>
    </>
  );
}

export default App;
