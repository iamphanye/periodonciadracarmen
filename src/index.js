import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import process from 'process';
import 'bootstrap/dist/css/bootstrap.min.css'; // si usas Bootstrap
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/700.css'; // Bold (opcional)
import './index.css'; // o './App.css', según corresponda



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
