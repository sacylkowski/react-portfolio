import React, { useState } from "react";
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState();

  // switch statement
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex-wrapper">
      <div className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <main>
        </main>
        <footer><Footer /></footer>
      </div>
    </div>
  );
}

export default App;
