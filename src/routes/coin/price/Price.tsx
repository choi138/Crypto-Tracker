import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IGetCoinTickers, getCoinTickers } from "../../../api/api";
import * as S from "./style"

function Price() {
    const { coinId } = useParams<{ coinId: string }>();
    const { isLoading, data } = useQuery<IGetCoinTickers>(
        ["price", coinId],
        () => getCoinTickers(String(coinId)),
        // {
        //     refetchInterval: 10000,
        // }
    );

    const price = data?.quotes.USD
    return (
        <>
            {isLoading ? (
                <h2>Loading..</h2>
            ) : (
                <S.Wrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Price
                        </S.PriceDataTitle>
                        <S.PriceDataTitle>
                            ${Number(price?.price.toFixed(0)).toLocaleString()}
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Percent Change (1H)
                        </S.PriceDataTitle>
                        <S.PriceDataTitle data={price?.percent_change_1h}>
                            {price?.percent_change_1h}%
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Percent Change (12H)
                        </S.PriceDataTitle>
                        <S.PriceDataTitle data={price?.percent_change_12h}>
                            {price?.percent_change_12h}%
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Percent Change (1D)
                        </S.PriceDataTitle>
                        <S.PriceDataTitle data={price?.percent_change_24h}>
                            {price?.percent_change_24h}%
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Percent Change (7D)
                        </S.PriceDataTitle>
                        <S.PriceDataTitle data={price?.percent_change_7d}>
                            {price?.percent_change_7d}%
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Trading Volume
                        </S.PriceDataTitle>
                        <S.PriceDataTitle>
                            ${Number(price?.volume_24h.toFixed(0)).toLocaleString()}
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Market Capitalization
                        </S.PriceDataTitle>
                        <S.PriceDataTitle>
                            ${Number(price?.market_cap.toFixed(0)).toLocaleString()}
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            All Time High(ATH)
                            <S.AthDate>({price?.ath_date.slice(0, 10)})</S.AthDate>
                        </S.PriceDataTitle>
                        <S.PriceDataTitle>
                            ${Number(price?.ath_price.toFixed(0)).toLocaleString()}
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                    <S.PirceDataWrap>
                        <S.PriceDataTitle>
                            Price / All Time High
                        </S.PriceDataTitle>
                        <S.PriceDataTitle data={price?.percent_from_price_ath}>
                            {price?.percent_from_price_ath}%
                        </S.PriceDataTitle>
                    </S.PirceDataWrap>
                </S.Wrap>
            )}
        </>
    )
}

export default Price;