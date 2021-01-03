import React from "react";
//
import { useChartConfig } from "hooks";
import { Box } from "components";
import { SyntaxHighlighter } from "components";
import { Chart } from "react-charts";
let sourceCode;
export const MyChart3 = () => {
  const { data, randomizeData } = useChartConfig({
    series: 8,
    datums: 3,
    dataType: "ordinal",
  });
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    []
  );
  return (
    <div>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart data={data} series={series} axes={axes} tooltip />
      </Box>
      <br />
      <SyntaxHighlighter code={sourceCode} />
    </div>
  );
};
