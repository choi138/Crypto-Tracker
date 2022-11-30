import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as S from '../style'
import { useLocation, Outlet, Link, useMatch, Routes, Route } from 'react-router-dom';
import { useQuery } from "react-query";
import { getCoinInfo, getCoinTickers } from "../../api/api";
import { Helmet } from "react-helmet"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdClose, MdPlayArrow, MdKeyboardBackspace } from "react-icons/md";
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
interface ILocation {
    state: {
        name: string;
    }
}

// interface ITag {
//     id: string;
//     name: string;
//     coin_counter: number;
//     ico_counter: number;
// }
interface IInfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    // tags: ITag[];
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    links: object;
    links_extended: object;
    whitepaper: object;
    first_data_at: string;
    last_data_at: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    };
}

function Coin() {
    const ERROR = "None..."
    // const [loading, setLoading] = useState(true);
    const { coinId } = useParams<{ coinId: string }>();
    // console.log(coinId)
    const { state } = useLocation() as ILocation;
    // console.log(state.name)
    // const [info, setInfo] = useState<IInfoData>();
    // const [priceInfo, setPriceInfo] = useState<IPriceData>();
    const priceMatch = useMatch("/:coinId/price");
    // console.log(priceMatch)
    const chartMatch = useMatch("/:coinId/chart");
    // console.log(chartMatch)
    const { data: coinInfo, isLoading: coinInfoloading } = useQuery<IInfoData>(
        ["info", coinId],
        () => getCoinInfo(String(coinId)),
        {
            refetchInterval: 5000,
        }
    );
    const { data: coinTickers, isLoading: coinTickersLoading, } = useQuery<IPriceData>(
        ["tickers", coinId],
        () => getCoinTickers(String(coinId))
    );

    // const goBack = <FontAwesomeIcon icon={faAngleLeft} />
    const isLoading = coinInfoloading || coinTickersLoading || false;

    return (
        <S.Container>
            <Helmet>
                <title>
                    {state?.name ? state.name : isLoading ? "Loading..." : coinInfo?.name}
                </title>
            </Helmet>
            <S.Header>
                <S.Title>
                    {state?.name ? state.name : isLoading ? "Loading..." : coinInfo?.name}
                </S.Title>
            </S.Header>
            {isLoading ? (
                <S.Loader>Loading...</S.Loader>
            ) : (
                <>
                    <S.GoBack to="/">
                        <MdKeyboardBackspace size="30px" />
                    </S.GoBack>
                    <S.OverView>
                        <S.OverViewItems>
                            <S.OverViewItemFirst>Rank:</S.OverViewItemFirst>
                            <S.OverViewItemSecond>{coinInfo?.rank || ERROR}</S.OverViewItemSecond>
                        </S.OverViewItems>
                        <S.OverViewItems>
                            <S.OverViewItemFirst>Symbol:</S.OverViewItemFirst>
                            <S.OverViewItemSecond>${coinInfo?.symbol || ERROR}</S.OverViewItemSecond>
                        </S.OverViewItems>
                        <S.OverViewItems>
                            <S.OverViewItemFirst>Price:</S.OverViewItemFirst>
                            <S.OverViewItemSecond>${coinTickers?.quotes.USD.price.toFixed(3) || ERROR}</S.OverViewItemSecond>
                        </S.OverViewItems>
                    </S.OverView>
                    <S.Description>{coinInfo?.description}</S.Description>
                    <S.OverView>
                        <S.OverViewItems>
                            <S.OverViewItemFirst>Total Suply:</S.OverViewItemFirst>
                            <S.OverViewItemSecond>{coinTickers?.total_supply || ERROR}</S.OverViewItemSecond>
                        </S.OverViewItems>
                        <S.OverViewItems>
                            <S.OverViewItemFirst>Max Supply:</S.OverViewItemFirst>
                            <S.OverViewItemSecond>${coinTickers?.max_supply || ERROR}</S.OverViewItemSecond>
                        </S.OverViewItems>
                    </S.OverView>
                    <S.Tabs>
                        <S.Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}> Chart </Link>
                        </S.Tab>
                        <S.Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}> Price</Link>
                        </S.Tab>
                    </S.Tabs>
                    <Outlet />
                </>
            )
            }
        </S.Container >
    )
};

export default Coin;