import * as React from "react";

import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";

import { scaleTime } from "d3-scale";

type Candle = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  split: string;
  dividend: string;
  absoluteChange: string;
  percentChange: string;
};

type StockChartProps = {
  data: Candle[];
};

export const StockChart: React.FC<StockChartProps> = ({ data }) => (
  <ChartCanvas
    width={100}
    height={400}
    margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
    seriesName="MSFT"
    data={data}
    type="svg"
    ratio={1}
    xAccessor={(d: Candle) => d?.date || ""}
    xScale={scaleTime()}
    xExtents={[data[0], data[data.length - 1]]}
  >
    <Chart id={0} yExtents={(d: Candle) => d.close}>
      <XAxis axisAt="bottom" orient="bottom" ticks={6} />
      <YAxis axisAt="left" orient="left" />
      <AreaSeries yAccessor={(d: Candle) => d.close} />
    </Chart>
  </ChartCanvas>
);
