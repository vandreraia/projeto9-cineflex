import "./style.css";

export default function Header() {
    const currentPage = window.location.pathname;
    let info;

    if (currentPage.slice(1, 8) === "sessoes") {
        info = "Selecione o horário"
    } else if (currentPage === "\\") {
        info = "Selecione o filme";
    } else if (currentPage === "\\") {
        info = "Selecione o filme";
    } 
    return (
        <>
            <header>
                CINEFLEX
            </header>
            <div className="topo">
                {info}
            </div>
        </>
    )
}