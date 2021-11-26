import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPosts } from "./features/posts/postsThunk";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./views/LandingPage";
import SigninPage from "./views/SigninPage";
import RegisterPage from "./views/RegisterPage";
import Dashboard from "./views/Dashboard";
import StorePage from "./views/StorePage";
import Inventory from "./views/Inventory";
import SalesPage from "./views/SalesPage";
import NotFound from "./views/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="gridcontainer">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/store"
              element={
                <ProtectedRoute>
                  <StorePage />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/inventory"
              element={
                <ProtectedRoute>
                  <Inventory />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/sales"
              element={
                <ProtectedRoute>
                  <SalesPage />
                </ProtectedRoute>
              }
            />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <p>© ITK 2021 All Rights Reserved</p>
          <a href="https://storyset.com/web" style={{ fontSize: "medium" }}>
            Web illustrations by Storyset
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
