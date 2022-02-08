import React from 'react';
import Chart from "react-apexcharts";
const RadialBar = (props) => {
    const option = {
        series: [props.per],
        chart: {
            height: 200,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 10,
                    size: '55%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        offsetY: 10,
                        color: "#1E637E",
                        fontSize: "25px",
                        show: true,
                    }
                },
            },
            
        },
        fill: {
            colors: [props.color],
        }
    }
  return <div>
      <Chart options={option} series={option.series} type="radialBar" height={180} />
  </div>;
};

export default RadialBar;
