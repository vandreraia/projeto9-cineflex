import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Sucesso({ title, day, hora, nome, cpf }) {
    return (
        <>
            <h3>Filme e sessão</h3>
            {title}<br></br>
            {day} {hora}
            <h3>Ingressos</h3>
            Assento 15
            <br></br>
            Assento 16
            <h3>Comprador</h3>
            Nome: {nome}
            <br></br>
            CPF: {cpf}
            <br></br>
            <Link to={`/`}>
                <Flex>
                    <Botao type="submit">Voltar pra Home</Botao>
                </Flex>
            </Link>
        </>
    )
}

const Botao = styled.button`
    background-color: #E8833A;
    border-width: 0;
    border-radius: 3px;
    color: #ffffff;
    padding: 10px 20px;
    margin: 20px 10px 10px 0px;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
`