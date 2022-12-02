import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chart from "./routes/coin/chart/Chart";
import Coin from "./routes/coin/Coin";
import Coins from "./routes/coins/Coins";
import Price from "./routes/coin/price/Price";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Coins />}></Route>
            </Routes>
            <Routes>
                <Route path="/:coinId" element={<Coin />}>
                    <Route path='chart' element={<Chart />}></Route>
                    <Route path='price' element={<Price />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;