import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import CoinPrice from "@Pages/CoinPrice";
import SearchPage from "@Pages/SearchPage";
import Error404Page from "@Pages/error404";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinPrice />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </div>
  );
}

export default Router;
