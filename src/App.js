import React from "react";
// Styles
import "./App.scss";
// Libraries
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Config
import RoutesComponent from "./config/RoutesComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="*"
          element={
            <>
              <Header />
              <RoutesComponent />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
