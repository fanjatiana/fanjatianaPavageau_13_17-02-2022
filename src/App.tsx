import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Router from './router/Router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
