// import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CatalogDetailsPage from "./pages/CamperDetailsPage/CatalogDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CatalogDetailsPage />}>
          {/* <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
