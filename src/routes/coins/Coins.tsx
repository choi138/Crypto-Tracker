import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as S from '../style'
import { useQuery } from 'react-query';
import { getCoins } from '../../api/api';
import { Helmet } from 'react-helmet';


interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", getCoins)
    console.log(data)
    // const [coins, setCoins] = useState<CoinInterface[]>();
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     (async () => {
    //         const getCoinData = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const coinData = await getCoinData.json();
    //         // console.log(json);
    //         setCoins(coinData.slice(0, 100))
    //         setLoading(false);
    //     })();

    // 매우 귀찮게 axios로 받아오는 법임 참고하시길
    // const getCoinApi = () => {
    //     try {
    //         const res = axios.get('https://api.coinpaprika.com/v1/coins');
    //         console.log(res)
    //         return res
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };

    // const fetchCoinApi = async () => {
    //     const coinsApi = await getCoinApi();
    //     const coinData = coinsApi?.data.slice(0, 100);
    //     // console.log(coinData)
    //     setCoins(coinData);
    // }

    // fetchCoinApi();
    // }, [])
    return (
        <S.Container>
            <Helmet>
                <title>
                    Coin
                </title>
            </Helmet>
            <S.Header>
                <S.Title>Coin</S.Title>
            </S.Header>
            {isLoading ? (
                <S.Loader>Loading...</S.Loader>
            ) : (<S.CoinsList>
                {data?.slice(0, 100).map((coin) => (
                    <S.Coin key={coin.id}>
                        <Link
                            to={`/${coin.id}`}
                            state={{ name: coin.name }}
                        >
                            <S.Img
                                src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                            />
                            {coin.name} &rarr;
                        </Link>
                    </S.Coin>
                ))}
            </S.CoinsList>)
            }
        </S.Container >
    )
};

export default Coins;