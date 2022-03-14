import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* self imports */
import Home from './views/Home';
import NotFoundPage from './views/NotFoundPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route 
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;