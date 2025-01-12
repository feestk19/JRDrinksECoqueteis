import React from 'react';
import reactDom from 'react-dom/client';
import './index.css'; //Estilos globais
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);