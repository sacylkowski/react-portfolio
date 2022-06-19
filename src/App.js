import React from "react";
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        </main>
        <footer><Footer /></footer>
    </div>
  );
}

export default App;
