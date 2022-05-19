import styled from 'styled-components';

export default function Footer({ title, posterURL, day, hora }) {
    console.log(posterURL)
    return (
        <Container>
            <ContainerImg>
                <Img src={posterURL} />
            </ContainerImg>
                {title}<br></br>
                {day} - {hora}
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;;
    display: flex;
    align-items: center;
    font-size: 26px;
`

const Img = styled.img`
    padding: 10px;
    width: 50px;
`

const ContainerImg = styled.div`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    background-color: white;
    margin-right: 10px;
`