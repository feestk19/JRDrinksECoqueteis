import React from "react";

function Home() {
    return (
        <div className="container text-white mt-5">
            <h1>Bem vindo à JR Drink's & Coquetéis</h1>
            <p>
            Somos especialistas em transformar eventos em experiências inesquecíveis com nossos drinks personalizados.
            </p>
            <button className="btn btn-warning mt-3" onClick={() => alert("Abrir popup de orçamento")}>
                Solicitar Orçamento
            </button>
        </div>
    );
}

export default Home;