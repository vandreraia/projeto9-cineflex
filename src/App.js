import Home from "./Components/Home/Home";
import Sessoes from "./Components/Sessoes/Sessoes";
import Assentos from "./Components/Assentos/Assentos";
import Sucesso from "./Components/Sucesso/Sucesso";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

export default function App() {
    const [movie, setMovie] = useState();
    const [sessao, setSessao] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();

    console.log(movie)
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sessoes/:idSessao" element={<Sessoes setMovie={setMovie} />} />
                    <Route path="/assentos/:idAssento"
                        element={
                            <Assentos
                                setSessao={setSessao}
                                setNome={setNome}
                                setCpf={setCpf}
                                nome={nome}
                                cpf={cpf}
                            />}
                    />
                    <Route path="/sucesso/"
                        element={
                            <Sucesso
                                title={movie ? movie.title : ""}
                                day={sessao ? sessao.day.date : ""}
                                hora={sessao ? sessao.name : ""}
                                nome={nome}
                                cpf={cpf}
                            />
                        }
                    />
                </Routes>
            </Main>
            <Footer
                title={movie ? movie.title : ""}
                posterURL={movie ? movie.posterURL : ""}
                day={sessao ? sessao.day.weekday : ""}
                hora={sessao ? sessao.name : ""}
            />
        </BrowserRouter>
    );
}

const Main = styled.div`
    margin: 10px;
`;