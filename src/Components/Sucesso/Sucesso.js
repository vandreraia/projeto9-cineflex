import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Sucesso({ setMovie, title, day, hora, nome, cpf, Nassento, setNAssento }) {

    function reset() {
        setNAssento([])
        setMovie([])
        
    }
    return (
        <>
            <h3>Filme e sessão</h3>
            {title}<br></br>
            {day} {hora}
            <h3>Ingressos</h3>
            {Nassento.map((assento, key) => <p key={key}>Assento {assento}</p>)}
            <h3>Comprador</h3>
            Nome: {nome}
            <br></br>
            CPF: {cpf}
            <br></br>
            <Flex>
                <Link to={`/`}>
                    <Botao type="submit" onClick={reset}>Voltar pra Home</Botao>
                </Link>
            </Flex>
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