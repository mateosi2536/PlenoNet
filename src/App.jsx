import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Navbar from "./components/NavegationBar";
import Footer from "./components/Footer";
import PlansPage from "./pages/PlansPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/PlenoNet" element={<PlansPage />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
