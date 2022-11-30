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


    const flatData = data?.flat() ?? [];
    const chartData = flatData.map((price) => {
        return {
            x: price.time_close,
            y: [
                price.open,
                price.high,
                price.low,
                price.close,
            ],
        };
    });
    return (
        <>
            {isLoading ? (
                <h2>Loading..</h2>
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[
                        {
                            data: chartData
                        }
                    ]}
                    options={{
                        theme: {
                            mode: "dark"
                        },
                        chart: {
                            height: 400,
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
                        yaxis: {
                            labels: {
                                formatter: (value) => '$' + value,
                            },
                        },
                        xaxis: {
                            type: 'datetime',
                            tooltip: {
                                enabled: false,
                            },
                        },

                    }}
                />
            )}
        </>
    )
}

export default Chart;