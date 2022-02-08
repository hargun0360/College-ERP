import React,{useGlobal} from 'reactn';
import Chart from "react-apexcharts";

const DistributedBar = (props) => {
  var v = new Array((props.data).length).fill(false);
  
  if(props.flag){
    v[props.id] = true;
    console.log(v);
  }

    const option = {
        series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30],
         
      }],
        chart: {
        height: 400,
        width: "100%" ,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
          },
          
      },
      colors: ["#FF902A","#6C63FF","#F82A4F","#7F00AB","#32C70D","#FF902A","#6C63FF","#F82A4F","#7F00AB","#32C70D","#FF902A"],
      plotOptions: {
        bar: {
          columnWidth: '39%',
          distributed: true,
          background:"#000fff"
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: { show: true },
        axisTicks: { show: false },
        categories: [
            "KCS-201",
            "KCS-201",
            "KCS-201",
            "KCS-201",
            "KCS-201",
            "KCS-201",
            "KCS-201",
           "KCS-201", 
        ],
        labels: {
          style: {
            colors: ["black","black","black","black","black","black","black","black","black","black","black","black","black"],
            fontSize: '12px'
          }
        }
      },
      yaxis: { show: false },
        grid: {
            show: false,
          },
      };
  return  (<>
  {
    v.map((val) => (
      val  ?  <div>
      <Chart options={option} series={option.series} type="bar" height={250} />
  </div> : null
    ))
  }
  
  </>);
};

export default DistributedBar;
