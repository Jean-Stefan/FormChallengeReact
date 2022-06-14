import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {Success} from './pages/Success/Success';
import {GlobalStyle} from './globalStyle';
import {Home} from './pages/Home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='success' element={<Success />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
