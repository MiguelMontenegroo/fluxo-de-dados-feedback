import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  
  const onChangeTitulo = (e) => {
    props.setTitulo(e.target.value)
  }

  const onChangeFoto2 = (e) => {
    props.setFoto2(e.target.value)
  }

  const onChangeDescricao = (e) => {
    props.setDescricao(e.target.value)
  }

  const postagem = () => {
    
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" titulo={props.titulo} onChange={onChangeTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" foto2={props.foto2} onChange={onChangeFoto2}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" descricao={props.descricao} onChange={onChangeDescricao} />
        </StyledLabel>
        <SendButton onClick={postagem}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
