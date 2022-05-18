import Home from "./Components/Home/Home";
import Sessoes from "./Components/Sessoes/Sessoes";
import Assentos from "./Components/Assentos/Assentos";
import Sucesso from "./Components/Sucesso/Sucesso";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idSessao" element={<Sessoes />} />
                <Route path="/assentos/:idAssento" element={<Assentos />} />
                <Route path="/sucesso/" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    );
}