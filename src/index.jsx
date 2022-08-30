import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';


class Prueba extends React.Component {
    render() {
        return (<h1>Hello World!</h1>);
    }
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
       
            <Prueba />
            <App />
    
    </ React.StrictMode>    
);