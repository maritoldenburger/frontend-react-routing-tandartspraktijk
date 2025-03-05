import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Whitening from './pages/whitening/Whitening.jsx';
import Home from './pages/home/Home.jsx';
import Appointments from './pages/appointments/Appointments.jsx';
import Cavities from './pages/cavities/Cavities.jsx';
import Navigation from './components/navigation/./Navigation.jsx';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gaatjes" element={<Cavities/>}/>
                <Route path="/afspraken" element={<Appointments/>}/>
                <Route path="/tanden-bleken" element={<Whitening/>}/>
            </Routes>
        </>
    );
}

export default App;