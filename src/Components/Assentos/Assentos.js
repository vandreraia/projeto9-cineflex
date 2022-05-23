import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


function MapAssentos({ name, isAvailable, id, setListaAssento, listaAssento, setNAssento, Nassento }) {
    const [clicked, setClicked] = useState(false);

    function addListaAssento(isAvailable) {
        if (isAvailable === false) {
            alert("ocupado men");
            return;
        }
        if (listaAssento.find(e => e === id) === undefined) {
            setListaAssento([...listaAssento, id]);
            setNAssento([...Nassento, name])
        } else {
            setListaAssento(listaAssento.filter(e => e !== id))
            setNAssento(Nassento.filter(e => e !== name))
        }
        setClicked(!clicked);
    }

    return (
        <Assento color={isAvailable ? "disponivel" : "indisponivel"} click={clicked} onClick={() => addListaAssento(isAvailable)}>{name}</Assento>
    )
}

export default function Assentos({ setSessao, setNome, setCpf, nome, cpf, setNAssento, Nassento }) {
    const { idAssento } = useParams();
    const [assento, setAssento] = useState();
    const [listaAssento, setListaAssento] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssento}/seats`);
        promise.then((res) => {
            setAssento(res.data);
        });
    }, [idAssento]);
    setSessao(assento);

    return (
        <>
            <Flex>

                <AssentoContainer>
                    {
                        assento ?
                            assento.seats.map((assento, index) =>
                                <MapAssentos
                                    name={assento.name}
                                    id={assento.id}
                                    isAvailable={assento.isAvailable}
                                    key={index}
                                    listaAssento={listaAssento}
                                    setListaAssento={setListaAssento}
                                    Nassento={Nassento}
                                    setNAssento={setNAssento}
                                />
                            )
                            :
                            <iframe src="https://giphy.com/embed/gYWeVOiMmbg3kzCTq5" title="pac-loading" width="480" height="480" frameBorder="0" allowFullScreen></iframe>

                    }
                </AssentoContainer>
            </Flex>
            <Info>
                <InfoInside>
                    <Circle color="selecionado"></Circle>
                    Selecionado
                </InfoInside>
                <InfoInside>
                    <Circle color="disponivel"></Circle>
                    Disponível
                </InfoInside>
                <InfoInside>
                    <Circle color="indisponivel"></Circle>
                    Indisponível
                </InfoInside>
            </Info>
            <form onSubmit={post}>
                <label for="nome">Nome do comprador:</label>
                <br></br>
                <input required type="text" value={nome} onChange={e => setNome(e.target.value)} id="nome" placeholder="Digite seu nome..."></input>
                <br></br>
                <label for="CPF">CPF do comprador:</label>
                <br></br>
                <input required type="number" value={cpf} onChange={e => setCpf(e.target.value)} id="CPF" placeholder="Digite seu CPF..."></input>
                <br></br>
                <Link to={`/sucesso/`}>
                    <Botao type="submit">Reservar assento(s)</Botao>
                </Link>
            </form>
        </>
    )

    function post(event) {
        const obj = {
            listaAssento,
            nome,
            cpf
        };
        event.preventDefault();
        console.log(obj)
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj);

    }
}

function statusAssento(color) {

    if (color === "disponivel") {
        return "#C3CFD9"
    } else if (color === "indisponivel") {
        return "#FBE192";
    } else if (color === "selecionado") {
        return "#8DD7CF";
    }
}

const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const AssentoContainer = styled.div`
    width: 340px;
`;

const Assento = styled.button`
    width: 26px;
    height: 26px;
    margin: 4px;
    border-radius: 50px;
    font-size: 11px;
    text-align: center;
    background-color: ${props => props.click ? statusAssento("selecionado") : statusAssento(props.color)};
`;

const Botao = styled.button`
    background-color: #E8833A;
    border-width: 0;
    border-radius: 3px;
    color: #ffffff;
    padding: 10px 20px;
    margin: 20px 10px 10px 0px;
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
    margin-top: 20px;
`

const InfoInside = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Circle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50px;
    background-color: ${props => statusAssento(props.color)};
`