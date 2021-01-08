import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Fees Status",
      backgroundColor: "rgba(100,200,50,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [0, 60, 80, 55, 90],
    },
  ],
};

export class MyChart6 extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Fees per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
