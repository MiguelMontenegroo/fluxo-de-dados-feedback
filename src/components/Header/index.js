import {TitleHeader, Imagem} from './styled'

export const Header = (props) => {

    return(
        <TitleHeader>
            <Imagem src={props.foto}></Imagem>
            <p>{props.nome}</p>
            Insta4
        </TitleHeader>
    )
}