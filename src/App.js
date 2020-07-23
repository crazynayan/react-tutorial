import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      <Header/>
      <MainContent />
      <br />
      <Footer />
    </div>
  );
}

export default App;
