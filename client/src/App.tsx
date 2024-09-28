import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ProductSection from "./pages/product";
import SellPage from "@/pages/sell";
import ProducerPage from "./pages/producer";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductSection />} path="/product" />
      <Route element={<SellPage />} path="/Sell" />
      <Route element={<ProducerPage />} path="/producer" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
