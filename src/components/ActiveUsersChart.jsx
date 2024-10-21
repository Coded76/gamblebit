import React from 'react';
import Chart from 'react-apexcharts';

const ActiveUsersChart = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-xl font-bold mb-3">Active Users</h2>
      <Chart options={data.options} series={data.series} type="bar" height={300} />
    </div>
  );
};

export default ActiveUsersChart;
