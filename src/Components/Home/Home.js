import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components';

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
            <div>
                <Flex>
                    {
                        movie ? movie.map((movie, index) =>
                            <Image key={index}>
                                <Link to={`/sessoes/${movie.id}`}>
                                    <Img src={movie.posterURL} alt="poster" />
                                </Link>
                            </Image>) : <iframe src="https://giphy.com/embed/gYWeVOiMmbg3kzCTq5" title="pac-loading" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
                    }
                </Flex>
            </div>
        </>
    )
}

const Img = styled.img`
    width: 129px;
    height: 193px;
    margin: 8px;
`
const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Image = styled.div`
    margin: 20px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`