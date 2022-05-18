import "./style.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(resposta => {
            setMovie(resposta.data);
        });
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