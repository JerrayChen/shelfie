import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header />
    </div>
  );
}

export default App;
