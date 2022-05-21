import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Header() {
    let currentPage = window.location.pathname;
    let info;
    currentPage = currentPage.slice(1, 9);
    if (currentPage === "sessoes/") {
        info = "Selecione o horário"
    } else if (currentPage === "\\") {
        info = "Selecione o filme";
    } else if (currentPage === "assentos") {
        info = "Selecione o(s) assento(s)";
    } else if (currentPage === "sucesso/") {
        info = "Pedido feito com sucesso!";
    }

    return (
        <>
            <Link to={`/`}>
                <Logo>
                    CINEFLEX
                </Logo>
            </Link>
            <Topo>
                {info}
            </Topo>
        </>
    )
}

const Logo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #C3CFD9;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #E8833A;
`

const Topo = styled.div`
    height: 110px;
    margin-top: 70px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
`