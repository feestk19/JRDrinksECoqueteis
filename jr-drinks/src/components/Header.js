import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container">
                <a className="navbar brand" href="/">JR Drink's & Coquetéis</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicos">Serviços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contatos">Fale Conosco</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;