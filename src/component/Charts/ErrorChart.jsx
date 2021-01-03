import React from "react";
import { Bar } from "react-chartjs-2";
export const ErrorChart = ({ data }) => {
  return (
    <React.Fragment>
      <Bar data={data}></Bar>
    </React.Fragment>
  );
};
