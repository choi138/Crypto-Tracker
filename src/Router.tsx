import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chart from "./routes/chart/Chart";
import Coin from "./routes/coin/Coin";
import Coins from "./routes/coins/Coins";
import Price from "./routes/price/Price";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='crypto-tracker/' element={<Coins />}></Route>
            </Routes>
            <Routes>
                <Route path="crypto-tracker/:coinId" element={<Coin />}>
                    <Route path='chart' element={<Chart />}></Route>
                    <Route path='price' element={<Price />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;