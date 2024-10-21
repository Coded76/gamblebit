import React from 'react';
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GambleGPT() {
  // Line chart for AI Predictions (Single vs Parlay)
  const aiPredictionsOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    },
    colors: ['#a78bfa', '#38bdf8'],
  };

  const aiPredictionsSeries = [
    {
      name: 'Single',
      data: [40, 60, 80, 60, 70, 80, 100],
    },
    {
      name: 'Parlay',
      data: [20, 30, 50, 40, 60, 70, 90],
    },
  ];

  // Donut chart for Predictions by Sport
  const predictionsBySportOptions = {
    labels: ['Soccer', 'Football', 'Basketball', 'Tennis', 'Others'],
    colors: ['#4f46e5', '#f59e0b', '#16a34a', '#f97316', '#3b82f6'],
  };

  const predictionsBySportSeries = [50, 25, 15, 5, 5];

  // Line chart for AI Accuracy (Win Rate and Average)
  const aiAccuracyOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    },
    colors: ['#a78bfa', '#38bdf8'],
  };

  const aiAccuracySeries = [
    {
      name: 'Win Rate',
      data: [40, 50, 55, 52, 60, 58, 65],
    },
    {
      name: 'Average',
      data: [30, 45, 50, 48, 55, 53, 60],
    },
  ];

  // Semi-donut chart for Odds Preference
  const oddsPreferenceOptions = {
    chart: {
      type: 'donut',
      height: 350,
    },
    labels: ['Low Odds', 'High Odds'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        donut: {
          size: '65%',
        },
      },
    },
    colors: ['#4f46e5', '#f97316'],
  };

  const oddsPreferenceSeries = [65, 15];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total AI Predictions (Line Chart) */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Total AI Predictions</h2>
          <Chart options={aiPredictionsOptions} series={aiPredictionsSeries} type="line" height={350} />
          <p className="text-xl mt-4">Total Predictions: 1,012</p>
        </div>

        {/* Predictions by Sport (Donut Chart) */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Predictions by Sport</h2>
          <Chart options={predictionsBySportOptions} series={predictionsBySportSeries} type="donut" height={350} />
          <p className="text-xl mt-4">Total Users: 5,012</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* AI Accuracy (Line Chart) */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">AI Accuracy</h2>
          <Chart options={aiAccuracyOptions} series={aiAccuracySeries} type="line" height={350} />
          <p className="text-2xl mt-4">Accuracy: 50%</p>
        </div>

        {/* Odds Preference (Semi-donut Chart) */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Odds Preference</h2>
          <Chart options={oddsPreferenceOptions} series={oddsPreferenceSeries} type="donut" height={350} />
          <p className="text-xl mt-4">Average Odds: 2.1</p>
        </div>
      </div>
    </div>
  );
}
