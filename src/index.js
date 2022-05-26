import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Skills from "./pages/Skills/skills"
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <About/>
    <Skills />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
