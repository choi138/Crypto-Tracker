import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCoinHistory } from "../../api/api";
import ApexChart from "react-apexcharts";

interface IData {
    time_open: number
    time_close: number
    open: string
    high: string
    low: string
    close: string
    volume: string
    market_cap: number
}

function Chart() {
    const { coinId } = useParams<{ coinId: string }>(); // url의 변수부분을 가져와준다.
    // console.log(coinId)
    const { isLoading, data } = useQuery<IData[]>(
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
                    type="line"
                    series={[
                        {
                            name: "price",
                            data: data?.map(price => parseFloat(price.close)) ?? [],
                        }
                    ]}
                    options={{
                        theme: {
                            mode: "dark"
                        },
                        chart: {
                            height: 30,
                            width: 500,
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
                            show: false
                        },
                        xaxis: {
                            labels: {
                                show: false
                            }
                        }
                    }}
                />
            )}
        </>
    )
}

export default Chart;