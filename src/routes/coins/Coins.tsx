import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as S from '../style'
import { useQuery } from 'react-query';
import { getCoins, IGetCoinData } from '../../api/api';
import { Helmet } from 'react-helmet';


function Coins() {
    const { isLoading, data } = useQuery<IGetCoinData[]>("allCoins", getCoins)
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