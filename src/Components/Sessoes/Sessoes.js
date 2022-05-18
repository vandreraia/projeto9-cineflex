import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Sessoes() {

    const { idSessao } = useParams();
    const [sessao, setSessao] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSessao}/showtimes`);
        promise.then((res) => {
            setSessao(res.data);
        });
    }, [idSessao]);

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
                                            <button>
                                                {showtime.name}
                                            </button>
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