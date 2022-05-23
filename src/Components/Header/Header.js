import styled from 'styled-components';
import {
    Link,
    useLocation
} from "react-router-dom";

export default function Header() {
    let location = useLocation().pathname;
    let info;
    // let history = useHistory();
    // goBack()
    location = location.slice(0, 9);
    if (location === "/sessoes/") {
        info = "Selecione o horário"
    } else if (location === "/") {
        info = "Selecione o filme";
    } else if (location === "/assentos") {
        info = "Selecione o(s) assento(s)";
    } else if (location === "/sucesso/") {
        info = "Pedido feito com sucesso!";
    }
    console.log(location)
    return (
        <>
            <Link to={`/`}>
                <Logo>
                    CINEFLEX
                </Logo>
            </Link>
            <Hidden></Hidden>
            {location !== "/" ?
                <Link to={`/`}>
                    <Button>back</Button>
                </Link>
                : ""}
            <Topo>
                {info}
            </Topo>

        </>
    )
}

const Hidden = styled.div`
height: 70px;
`

const Button = styled.button`
border-radius: 30px;
    background-color: #E8833A;
    color: #ffffff;
    border-width: 0;
    padding: 5px 10px;

`
const Logo = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #C3CFD9;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #E8833A;
`

const Topo = styled.div`
    margin: 20px 0 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`