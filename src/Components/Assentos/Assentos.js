import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Assentos() {
    const { idAssento } = useParams();
    const [assento, setAssento] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssento}/seats`);
        promise.then((res) => {
            setAssento(res.data);
        });
    }, [idAssento]);

    function statusAssento(color) {

        if (color === true) {
            return "indisponivel"
        } else if (color === "select") {
            //habilitado = "#8DD7CF";
        }
    }
    return (
        <>
            {
                assento ?
                    assento.seats.map((assento, index) =>
                        <Botao key={index} onClick={statusAssento("select")}>
                            {assento.name}
                        </Botao>)
                    : "Loading..."
            }
            <div className="info">
                <div className="info-inside">
                    <div className="circle selecionado"></div>
                    Selecionado
                </div>
                <div className="info-inside">
                    <div className="circle disponivel"></div>
                    Disponível
                </div>
                <div className="info-inside">
                    <div className="circle indisponivel"></div>
                    Indisponível
                </div>
            </div>
            <p>Nome do comprador:</p>
            <input placeholder="Digite seu nome..."></input>
            <p>CPF do comprador:</p>
            <input placeholder="Digite seu CPF..."></input>
            <br></br>
            <Link to={`/sucesso/`}>
                <button>Reservar assento(s)</button>
            </Link>
        </>
    )
}

const Botao = styled.button`
            width: 26px;
            height: 26px;
            margin: 4px;
            border-radius: 50px;
            font-size: 11px;
            text-align: center;
            background-color: ${props => props.habilitado};
            `;