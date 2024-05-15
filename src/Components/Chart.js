import React, { useEffect, useRef, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, radialLinear } from 'chart.js/auto';
import './Chart.css';

const RadarChart = ({ selectedValues }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    
    // Cleanup function to destroy the previous Chart instance
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, [selectedValues]);


  const data = Object.values(selectedValues).map(entry => entry.point);

  const chartData = {
    labels: ['Team Size', 'Geographic Distribution', 'Organizational Distribution', 'Skill Availability', 'Compliance', 'Solution Complexity', 'Domain Complexity'],
    datasets: [
      {
        label: 'Your Selection',
        data: data,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };


  const chartOptions = {
    scales: {
      r: {
        beginAtZero: true,
        
        type: 'radialLinear',
        // Options for the radial (angular) axis
        ticks: {
          
          1:['Colocated', 'Same Building', 'Same Time Zone','Global'],
          2:['Global', 'Same Time Zone', 'Same Building', 'Colocated'],
          3:['10', '25', '100', '250+'],
          4:['Available Now', 'Available Soon', 'Easy to Acquire', 'Difficult to Acquire'],
          5:['Informal', 'Internal Oversight', 'External Standards', 'Regulatory Oversight', 'Existential'],
          6:['New Stand-Alone', 'New Integrated','Legacy', 'Multi-Environment Legacy'],
          7:['Straightforward', 'Complex', 'Very Complex', 'Rapidly Evolving'],
        },
      },
    },
  
  };


   return <Radar id="radar-chart" ref={chartRef} data={chartData} options={chartOptions} />;

};

export default RadarChart;