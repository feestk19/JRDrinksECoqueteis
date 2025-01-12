import React from "react";

function OrcamentoPopup({ isOpen, closePopup }) {
    if(!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup0content bg-dark text-white p-4">
                <h3>Solicitar Orçamento</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-warning">Enviar</button>
                </form>
                <button className="btn btn-outline-light mt-3" onClick={closePopup}>Fechar</button>
            </div>
        </div>
    );
}

export default OrcamentoPopup;