import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return <h1>Hello World React!</h1>;
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);