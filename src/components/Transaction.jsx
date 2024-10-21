import React from 'react';
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Transaction() {
  // Mini Line chart options for top cards
  const miniChartOptions = {
    chart: {
      type: 'line',
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
    },
    colors: ['#38bdf8'],
  };

  const miniChartOptionsPurple = {
    ...miniChartOptions,
    colors: ['#a78bfa'],
  };

  const miniChartSeries = [
    {
      name: 'Amount',
      data: [35, 40, 45, 50, 49, 60, 70],
    },
  ];

  const miniChartSeriesDecline = [
    {
      name: 'Amount',
      data: [55, 52, 50, 48, 45, 43, 40],
    },
  ];

  // Bar chart for Revenue Overview
  const revenueOverviewOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$${val}`;
        },
      },
    },
    colors: ['#38bdf8', '#fb7185', '#fbbf24'],
  };

  const revenueOverviewSeries = [
    {
      name: 'Distributed',
      data: [400, 430, 448, 470, 540, 580, 690],
    },
    {
      name: 'Redeemed',
      data: [250, 300, 350, 400, 420, 480, 520],
    },
    {
      name: 'Wagered',
      data: [100, 200, 250, 300, 350, 400, 450],
    },
  ];

  return (
    <div className="">
      {/* Top cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Amount Claimed to Wallet */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-2">Amount Claimed to Wallet</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">$15,012</span>
            <div className="flex space-x-2 text-sm text-gray-500">
              <span>USDT</span>
              <span>ETH</span>
            </div>
          </div>
          <div className="mt-2">
            <Chart options={miniChartOptions} series={miniChartSeries} type="line" height={50} />
          </div>
          <p className="text-green-500 mt-2">+9.8%</p>
        </div>

        {/* Total Claimed by Users */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-2">Total Claimed by Users</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">$8,145</span>
            <div className="flex space-x-2 text-sm text-gray-500">
              <span>USDT</span>
              <span>ETH</span>
            </div>
          </div>
          <div className="mt-2">
            <Chart options={miniChartOptionsPurple} series={miniChartSeriesDecline} type="line" height={50} />
          </div>
          <p className="text-red-500 mt-2">-4.8%</p>
        </div>

        {/* Total Bonuses Awarded */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-sm text-gray-500 mb-2">Total Bonuses Awarded</h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">$8,145</span>
            <div className="flex space-x-2 text-sm text-gray-500">
              <span>USDT</span>
              <span>ETH</span>
            </div>
          </div>
          <div className="mt-2">
            <Chart options={miniChartOptionsPurple} series={miniChartSeriesDecline} type="line" height={50} />
          </div>
          <p className="text-red-500 mt-2">-4.8%</p>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="mt-6 bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Revenue Overview in $USDT</h3>
        <Chart options={revenueOverviewOptions} series={revenueOverviewSeries} type="bar" height={350} />
      </div>
    </div>
  );
}
