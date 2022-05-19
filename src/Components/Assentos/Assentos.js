import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Assentos({setSessao}) {
    const { idAssento } = useParams();
    const [assento, setAssento] = useState();
    const [clicked, setClicked] = useState(false);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssento}/seats`);
        promise.then((res) => {
            setAssento(res.data);
        });
    }, [idAssento]);
    console.log(assento)
    setSessao(assento)

    return (
        <>
            {
                assento ?
                    assento.seats.map((assento, index) =>
                        <Assento color={assento.isAvailable ? "indisponivel" : "disponivel"} key={index} onClick={() => setClicked(!clicked)}>
                            {assento.name}
                        </Assento>)
                    : "Loading..."
            }
            <Info>
                <InfoInside>
                    <Circle color="selecionado"></Circle>
                    Selecionado
                </InfoInside>
                <InfoInside>
                    <Circle color="disponivel"></Circle>
                    Disponível
                </InfoInside>
                <InfoInside>
                    <Circle color="indisponivel"></Circle>
                    Indisponível
                </InfoInside>
            </Info>
            <p>Nome do comprador:</p>
            <input placeholder="Digite seu nome..."></input>
            <p>CPF do comprador:</p>
            <input placeholder="Digite seu CPF..."></input>
            <br></br>
            <Link to={`/sucesso/`}>
                <Botao onClick={() => setAll()}>Reservar assento(s)</Botao>
            </Link>
        </>
    )
    
    function setAll() {

    }
}

function statusAssento(color) {

    if (color === "disponivel") {
        return "#C3CFD9"
    } else if (color === "indisponivel") {
        return "#FBE192";
    } else if (color === "selecionado") {
        return "#8DD7CF";
    }
}

const Assento = styled.button`
    width: 26px;
    height: 26px;
    margin: 4px;
    border-radius: 50px;
    font-size: 11px;
    text-align: center;
    background-color: ${props => props.click ? statusAssento("selecionado") : statusAssento(props.color)};
`;

const Botao = styled.button`
    background-color: #E8833A;
    border-width: 0;
    border-radius: 3px;
    color: #ffffff;
    padding: 10px 20px;
    margin: 20px 10px 10px 0px;
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
    margin-top: 20px;
`

const InfoInside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Circle  = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50px;
    background-color: ${props => statusAssento(props.color)};
`