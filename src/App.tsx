import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import harryPotterLogo from "./assets/logos/harry-potter-logo.webp"

import { AnimatedRoutes } from './Routes/AnimatedRoutes';

const App: React.FC = () => (
  <Router>
    <Header harryPotterLogo={harryPotterLogo} />
    <div className="relative overflow-x-hidden">
      <AnimatedRoutes />
    </div>  
  </Router>
);

export default App;
