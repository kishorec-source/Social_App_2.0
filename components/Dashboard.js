import React from 'react';
import {Bar, Line, Pie, Doughnut, Radar, PolarArea} from 'react-chartjs-2';

const Dashboard = () => {
  const userActivityData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'User Activity',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const adPerformanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Ad Performance',
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153,102,255,0.6)',
        hoverBorderColor: 'rgba(153,102,255,1)',
        data: [45, 49, 60, 71, 46, 35, 30],
      },
    ],
  };

  return (
    <div>
      <h2>User Activity</h2>
      <Bar data={userActivityData} />
      <h2>Ad Performance</h2>
      <Line data={adPerformanceData} />
      <h2>Pie Chart</h2>
      <Pie data={userActivityData} />
      <h2>Doughnut Chart</h2>
      <Doughnut data={adPerformanceData} />
      <h2>Radar Chart</h2>
      <Radar data={userActivityData} />
      <h2>Polar Area Chart</h2>
      <PolarArea data={adPerformanceData} />
    </div>
  );
};

export default Dashboard;
