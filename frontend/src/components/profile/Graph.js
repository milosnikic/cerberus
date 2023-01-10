import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: true,
  scale: {
    ticks: {
      beginAtZero: true,
      max: 4,
      stepSize: 0.3,
    },
  },
};

export function Graph({ hltv, label }) {
  const data = {
    labels: [
      "KD Ratio",
      "Kills P/R",
      "Assists P/R",
      "Deaths P/R",
      "Rating 2.0",
    ],
    datasets: [
      {
        label: label,
        data: [
          hltv?.overall?.kd_ratio,
          hltv?.overall?.kills_round,
          hltv?.overall?.assists_round,
          hltv?.overall?.deaths_round,
          hltv?.overall["rating_2.0"],
        ],
        backgroundColor: "rgba(0, 150, 255, 0.2)",
        borderColor: "rgba(0, 150, 255, 1)",
        borderWidth: 2,
      },
    ],
  };
  return <Radar data={data} options={options} />;
}
