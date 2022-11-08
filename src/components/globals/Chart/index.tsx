import React from 'react';
import { Line } from '@ant-design/plots';

const Chart = () => {
  const data = [
    {
      date: '26/09/2020',
      value: 3,
    },
    
  ];


  
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};

export default Chart
