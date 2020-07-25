import React from 'react';
import { LineChart } from '@jhonnold/react-chart.js';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            data: [4, 8, 3, 5, 2, 3],
            fill: false,
            backgroundColor: '#ff1844',
            borderColor: '#ff184461',
            hoverBorderDashOffset: 1,
        },
    ],
};

const options = {
    legend: {
        display: false
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Line = () => (
    <div className="chart">
        <LineChart data={data} options={options} />
    </div>
);

export default Line;