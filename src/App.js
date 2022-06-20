import React from "react";
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
        </main>
        <footer><Footer /></footer>
    </div>
  );
}

export default App;
