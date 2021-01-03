import React, { useState, useEffect } from "react";
// import { render } from 'react-dom';
import { Bar } from "react-chartjs-2";
import { ErrorChart } from "./ErrorChart";

export const MyChart5 = () => {
  const [percentage, setpercentage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setpercentage(80);

    setData({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 8, 15, 22, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [setpercentage, setData]);

  return (
    <div>
      <ErrorChart data={data} />;
    </div>
  );
};
