import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
        <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;