import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./styles/index.scss";

// Redux
import { Provider } from "react-redux";
import store from "./redux/app/store";
import AuthGuard from "./service/AuthGuard";
import Loader from "./components/Loader";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const TransactionsPage = React.lazy(() => import("./pages/TransactionsPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/profile"
        element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      />
      <Route path="/transactions" element={<TransactionsPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
