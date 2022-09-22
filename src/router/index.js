import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Home from '../views/Home';
import Payment from '../views/Payment';

function ReactRouter(props) {
    return (
        // Berisi routes
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/payment' element={<Payment />} />
                <Route exact path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default ReactRouter;