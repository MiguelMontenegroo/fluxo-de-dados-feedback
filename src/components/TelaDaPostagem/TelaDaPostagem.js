import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.titulo}</TitleHeader>
      <Image src={props.foto2} />
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
