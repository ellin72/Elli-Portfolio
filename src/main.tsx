import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/globals.css'

const restoreSpaPathFromQuery = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectedPath = params.get('p');

    if (!redirectedPath) {
        return;
    }

    const decodedPath = decodeURIComponent(redirectedPath).replace(/~and~/g, '&');
    const newUrl = `${window.location.origin}${decodedPath}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
};

restoreSpaPathFromQuery();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
