import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthGuard from "./service/AuthGuard";

const App = () => {

  return (
    <body>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<AuthGuard><ProfilePage /></AuthGuard>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </body>
  );
};

export default App;
