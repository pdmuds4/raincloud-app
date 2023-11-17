import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './pages/page';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={ <Page /> }/>    
        </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);