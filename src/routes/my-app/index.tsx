import Layout from "@/app/layout";
import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Lazy load pages
const HomePage = lazy(() => import("@/pages/SibarPage/HomePage"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
