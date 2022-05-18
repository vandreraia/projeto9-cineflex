import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Assentos() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`);
        promise.then((res) => {
            setSessao(res.data);
            console.log(sessao)
        });
    }, []);

    return (
        <>aaaa</>
    )
}