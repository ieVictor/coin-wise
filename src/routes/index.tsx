import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import CoinPrice from "@Pages/CoinPrice";
import SearchPage from "@Pages/SearchPage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinPrice />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default Router;
