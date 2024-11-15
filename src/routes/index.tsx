import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import CoinPrice from "@Pages/CoinPrice";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinPrice />} />
      </Routes>
    </div>
  );
}

export default Router;
