import React from 'react';
import Chart from 'react-apexcharts';

const StatCard = ({ title, value, chartData, percentage, isIncrease }) => {
  const color = isIncrease ? 'text-green-500' : 'text-red-500';
  
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">{value}</h2>
        <p className={`text-sm ${color}`}>
          {isIncrease ? '↑' : '↓'} {percentage}%
        </p>
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <Chart options={chartData.options} series={chartData.series} type="line" height={70} />
    </div>
  );
};

export default StatCard;
