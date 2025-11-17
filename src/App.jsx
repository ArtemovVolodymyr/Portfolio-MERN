import React from 'react'
import "./App.css";
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';  


const App = () => {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
    </main>
    </>
  )
}

export default App