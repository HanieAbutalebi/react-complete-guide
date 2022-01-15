import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  // cast array of objects to array of numbers (datapoints is array of objects)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // find max value in datapoint props / dataPointValues is an array (use spreadOperator)
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
