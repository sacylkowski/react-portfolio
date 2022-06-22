import React, { useState } from "react";
import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // switch statement
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Projects />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          return <Resume />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <main>
        <About></About>
        <Contact></Contact>
        </main>
        <footer><Footer /></footer>
    </div>
  );
}

export default App;
