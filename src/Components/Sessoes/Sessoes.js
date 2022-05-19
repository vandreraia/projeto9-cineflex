import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Sessoes({setMovie}) {

    const { idSessao } = useParams();
    const [sessao, setSessao] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`);
        promise.then((res) => {
            setSessao(res.data);
        });
    }, [idSessao]);
    setMovie(sessao);
    return (
        <>
            {
                sessao ?
                    sessao.days.map((day, index) =>
                        <div key={index}>
                            {day.weekday} -  {day.date}
                            <div>
                                {
                                    day.showtimes.map((showtime, index) =>
                                        <Link to={`/assentos/${showtime.id}`} key={index}>
                                            <Botao>
                                                {showtime.name}
                                            </Botao>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    )
                    : "Loading..."
            }
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