import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
let Chart = (Props) => {
    let dataPointValues = Props.dataPoints.map(dataPoint => dataPoint.value)
    let totalMax = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {Props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;