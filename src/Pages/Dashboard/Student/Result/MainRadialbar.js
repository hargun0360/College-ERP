import React from 'react';
import Chart from "react-apexcharts";
const MainRadialbar = () => {
    const option = {
        series: [80],
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
                        offsetY: 15,
                        color: "#1E637E",
                        fontSize: "34px",
                        show: true,
                    }
                },
            },
            
        },
        fill: {
            colors: ['#007BAB'],
        }
    }
  return <div>
      <Chart options={option} series={option.series} type="radialBar" height={250} />
  </div>;
};

export default MainRadialbar;
