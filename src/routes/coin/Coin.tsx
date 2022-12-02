import { useParams } from "react-router";
import * as S from '../style'
import { useLocation, Outlet, Link, useMatch } from 'react-router-dom';
import { useQuery } from "react-query";
import { getCoinInfo, getCoinTickers, IGetCoinInfo, IGetCoinTickers } from "../../api/api";
import { Helmet } from "react-helmet"
import { MdKeyboardBackspace } from "react-icons/md";
import ChModeBtn from "../../atom/chMode";
interface ILocation {
    state: {
        name: string;
    }
}


function Coin() {
    const ERROR = "None..."
    const { coinId } = useParams<{ coinId: string }>();
    const { state } = useLocation() as ILocation;
    const chartMatch = useMatch("/crypto-tracker/:coinId/chart");
    console.log(chartMatch)
    const priceMatch = useMatch("/crypto-tracker/:coinId/price");
    const { data: coinInfo, isLoading: coinInfoloading } = useQuery<IGetCoinInfo>(
        ["info", coinId],
        () => getCoinInfo(String(coinId)),
        {
            refetchInterval: 5000,
        }
    );
    const { data: coinTickers, isLoading: coinTickersLoading, } = useQuery<IGetCoinTickers>(
        ["tickers", coinId],
        () => getCoinTickers(String(coinId))
    );
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
                    <S.GoBack to="/crypto-tracker">
                        <MdKeyboardBackspace size="30px" />
                    </S.GoBack>
                    <S.themeBtn>
                        <ChModeBtn />
                    </S.themeBtn>
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
                            <S.OverViewItemSecond>{coinTickers?.max_supply || ERROR}</S.OverViewItemSecond>
                        </S.OverViewItems>
                    </S.OverView>
                    <S.Tabs>
                        {chartMatch ? (
                            <S.TabUm isActive={chartMatch !== null}>
                                <Link to={`/crypto-tracker/${coinId}/chart`}> Chart </Link>
                            </S.TabUm>
                        ) : (
                            <S.Tab isActive={chartMatch !== null}>
                                <Link to={`/crypto-tracker/${coinId}/chart`}> Chart </Link>
                            </S.Tab>
                        )}

                        {priceMatch ? (
                            <S.TabUm isActive={priceMatch !== null}>
                                <Link to={`/crypto-tracker/${coinId}/price`}> Price</Link>
                            </S.TabUm>
                        ) : (
                            <S.Tab isActive={priceMatch !== null}>
                                <Link to={`/crypto-tracker/${coinId}/price`}> Price</Link>
                            </S.Tab>
                        )}
                    </S.Tabs>
                    <Outlet />
                </>
            )
            }
        </S.Container >
    )
};

export default Coin;