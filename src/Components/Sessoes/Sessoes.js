import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function Sessoes() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState({});

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`
        );

        promise.then((res) => {
            setSessao(res.data);
            console.log(sessao.days)
        });
    }, []);
    return (
        <>
            <div>
                <Link to={`/sessoes/${sessao.id}`}></Link>
                Quinta-feira - 24/06/2021
                <button></button>
            </div>
            {sessao.days.map((day, index) => <div>{day.weekday}</div>)}
        </>
    )
}