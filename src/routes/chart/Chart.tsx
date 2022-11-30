import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCoinHistory, IHistoryData } from "../../api/api";
import ApexChart from "react-apexcharts";

function Chart() {
    const { coinId } = useParams<{ coinId: string }>();
    const { isLoading, data } = useQuery<IHistoryData[]>(
        ["ohlcv", coinId],
        () => getCoinHistory(String(coinId)),
        {
            refetchInterval: 10000,
        }
    );
    return (
        <>
            {isLoading ? (
                <h2>Loading..</h2>
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            data: data?.map((price: IHistoryData) => {
                                return [
                                    price.time_open,
                                    price.open,
                                    price.high,
                                    price.low,
                                    price.close,
                                ];
                            }) as any,
                        }
                    ]}
                    options={{
                        theme: {
                            mode: "dark"
                        },
                        chart: {
                            height: 300,
                            width: 400,
                            toolbar: {
                                show: false
                            },
                            background: "transparent"
                        },
                        stroke: {
                            curve: "smooth",
                            width: 5,
                        },
                        grid: {
                            show: false
                        },
                        yaxis: {
                            tooltip: {
                                enabled: true,
                            },

                        },
                        xaxis: {
                            type: 'datetime',
                        },

                    }}
                />
            )}
        </>
    )
}

export default Chart;