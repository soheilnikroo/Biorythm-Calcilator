import dayjs from "dayjs";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import "./BiorhythmChart.css";

import { calculateBiorhythmSeries } from "../calculations";

const fromDate = (isoString) => {
  return dayjs(isoString).format("D MMM");
};

const BiorhythmChart = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();

  const data = calculateBiorhythmSeries(birthDate, startDate, 31).map(
    (item) => ({ ...item, date: fromDate(item.date) })
  );

  return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line type="natural" dot={false} dataKey="physical" stroke="green" />
        <Line
          type="natural"
          dot={false}
          dataKey="emotional"
          className="emotional"
        />
        <Line type="natural" dot={false} dataKey="intellectual" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhythmChart;
