import React, { useState } from "react"; // React com R maiúsculo
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import OrcamentoPopup from "./components/OrcamentoPopup";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <Header />
      <Home />
      {isPopupOpen && (
        <OrcamentoPopup isOpen={isPopupOpen} closePopup={() => setPopupOpen(false)} />
      )}
      <Footer />
      <button onClick={() => setPopupOpen(true)}>Abrir Popup</button>
    </div>
  );
}

export default App;
