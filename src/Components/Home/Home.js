import "./style.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setMovie(resposta.data);
        });
        //console.log(movie)
    }, []);
    return (
        <>
            <main>
                <div className="flex">
                    {
                        movie ? movie.map((movie, index) =>
                            <div className="image" key={index}>
                                <Link to={`/sessoes/${movie.id}`}>
                                    <img src={movie.posterURL} alt="poster" />
                                </Link>
                            </div>) : "Loading..."
                    }
                </div>
            </main>
        </>
    )
}