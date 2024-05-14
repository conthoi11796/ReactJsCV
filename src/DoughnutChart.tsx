import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
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
};

const DoughnutChart = () => (
  <div>
    <h2>Doughnut Chart</h2>
    <Doughnut
      data={data}
      plugins={[
        {
          id: "customPlugin", // Add the 'id' property
          afterDraw: (chart) => {
            const total = 100;

            const { ctx } = chart;

            ctx.save();

            // Set globalCompositeOperation to draw the tooltip over the label center
            ctx.globalCompositeOperation = "destination-over";

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Get position center point
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;

            // Handle render title text center
            ctx.font = "bold 20px Arial"; // Adjust the font size and family
            ctx.fillText(total.toString(), xCoor, yCoor);

            // Handle render value text center
            ctx.font = "12px Arial"; // Adjust the font size and family
            ctx.fillText("textCenter", xCoor, yCoor + 20); // Move down 25px

            ctx.restore();
            ctx.save();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.restore();
          },
        },
      ]}
    />
  </div>
);

export default DoughnutChart;
