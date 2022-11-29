const BASE_URL = "https://api.coinpaprika.com/v1"

export function getCoins() {
    return fetch(`${BASE_URL}/coins`)
        .then(res => res.json())
}

export function getCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`)
    .then(res => res.json())
}

export function getCoinTickers(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`)
    .then(res => res.json())
}

export function getCoinHistory(coinId:string){
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    .then(res => res.json())
}
