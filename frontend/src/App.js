import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthGuard from "./service/AuthGuard";
import Loader from "./components/Loader";

// React.lazy pour charger dynamiquement les composants de manière asynchrone
const LoginPageLazy = React.lazy(() => import("./pages/LoginPage"));
const ProfilePageLazy = React.lazy(() => import("./pages/ProfilePage"));

const App = () => {
  return (
    <body>
      <BrowserRouter>
        <Header />
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPageLazy />} />
            <Route
              path="/profile"
              element={
                <AuthGuard>
                  <ProfilePageLazy />
                </AuthGuard>
              }
            />
          </Routes>
        </React.Suspense>
        <Footer />
      </BrowserRouter>
    </body>
  );
};

export default App;
