import React, { Component } from "react";
import {Card, CardHeader} from "reactstrap";
import Chart from 'react-apexcharts';

  const options = {
    chart: {
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    legend: { 
        show: true,
        fontSize: '14px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        markers: {            
            fillColors: '#C3B5D1', 
            width: 18,
            height: 18,
            radius: 3,
            offsetX: -10,
            offsetY: 4,
        },
        labels: {
            colors: '#C3B5D1',
        }
    },
    labels: ['Live', 'Booked', 'Filling', 'Completed'],
    stroke: {
        colors: '#380966',
        show: true,
        width: 5,
    },
    colors: ['#F5AA25', '#603A85', '#603A85', '#603A85'],
    grid: {
      padding: {
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: 30,
        donut: {
          size: '83%',
          labels: {
            show: true,
            name: {
              offsetY: 20,
            },
            value: {
              offsetY: -15,
              color: '#fff',
              fontSize: '30px',
              fontWeight: '700',
              fontFamily: 'Poppins',
            },
            total: {
              show: true,
              offsetY: 15,
              color: '#C3B5D1',
              fontSize: '16px',
              fontFamily: 'Poppins',
              label: 'Jobs',
              formatter(w) {
                return '15'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1440,
        options: {
          chart: {
            height: 180
          }
        }
      },
    ]
  }

class CardStatistics extends Component {
    render() {
        return (
            <Card className="card__statistics">
                <CardHeader tag="h3">Statistics</CardHeader>
                <Chart options={options} series={[8, 2, 3, 2]} type='donut' height={220} />
            </Card>
        )
    }
}

export default CardStatistics;
