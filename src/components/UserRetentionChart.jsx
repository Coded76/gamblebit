import React from 'react';
import Chart from 'react-apexcharts';

const UserRetentionChart = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-xl font-bold mb-3">User Retention</h2>
      <Chart options={data.options} series={data.series} type="line" height={300} />
    </div>
  );
};

export default UserRetentionChart;
