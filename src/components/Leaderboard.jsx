import React from 'react';
import dynamic from 'next/dynamic';

// Load ApexCharts dynamically (avoids SSR issues)
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Leaderboard = () => {
    // Chart Options for the first two small line charts
    const chartOptions1 = {
        chart: { type: 'line' },
        xaxis: { categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] },
        colors: ['#3b82f6'],
        stroke: { curve: 'smooth' },
    };

    const chartOptions2 = {
        chart: { type: 'line' },
        xaxis: { categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] },
        colors: ['#8b5cf6'],
        stroke: { curve: 'smooth' },
    };

    // Bar chart for Active Leaderboard Users
    const barChartOptions = {
        chart: { type: 'bar', stacked: true },
        plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
        xaxis: { categories: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'] },
        colors: ['#ef4444', '#60a5fa', '#a78bfa'],
    };

    const barChartData = [
        { name: 'Regular', data: [400, 300, 200, 100, 150, 250, 300] },
        { name: 'Casual', data: [100, 200, 150, 300, 100, 50, 200] },
        { name: 'Top Competitors', data: [300, 400, 450, 350, 400, 500, 400] },
    ];

    return (
        <div className="">
            {/* Top Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className='col-span-2'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Active Users Card */}
                        <div className="p-6 bg-white rounded-lg flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-500">Active Users on Leaderboard</h3>
                                <h2 className="text-3xl font-bold">1,012</h2>
                            </div>
                            <ReactApexChart options={chartOptions1} series={[{ data: [10, 30, 20, 40] }]} type="line" height={120} />
                        </div>

                        {/* Bet Slips Copied Card */}
                        <div className="p-6 bg-white rounded-lg flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-500">Total Bet Slips Copied</h3>
                                <h2 className="text-3xl font-bold">445</h2>
                            </div>
                            <ReactApexChart options={chartOptions2} series={[{ data: [5, 15, 25, 10] }]} type="line" height={120} />
                        </div>
                    </div>

                    {/* Top Bettors Table */}
                    <div className="mt-6 p-6 bg-white rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Top Bettors</h3>
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="text-left bg-gray-100">
                                    <th className="py-2 px-4">User</th>
                                    <th className="py-2 px-4">Amount Wagered</th>
                                    <th className="py-2 px-4">Odds Won</th>
                                    <th className="py-2 px-4">Amount Won</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-2 px-4">Zain Workman</td>
                                    <td className="py-2 px-4">$1,100</td>
                                    <td className="py-2 px-4">59</td>
                                    <td className="py-2 px-4">$5,500</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4">Maren George</td>
                                    <td className="py-2 px-4">$980</td>
                                    <td className="py-2 px-4">46</td>
                                    <td className="py-2 px-4">$4,750</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4">Martin Kenter</td>
                                    <td className="py-2 px-4">$1,023</td>
                                    <td className="py-2 px-4">37</td>
                                    <td className="py-2 px-4">$3,590</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4">Erin Franci</td>
                                    <td className="py-2 px-4">$559</td>
                                    <td className="py-2 px-4">31</td>
                                    <td className="py-2 px-4">$2,845</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 px-4">Gustavo Kenter</td>
                                    <td className="py-2 px-4">$498</td>
                                    <td className="py-2 px-4">23</td>
                                    <td className="py-2 px-4">$2,250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Users Table */}
                <div className="p-6 bg-white rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Top Users</h3>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="text-left bg-gray-100">
                                <th className="py-2 px-4">User</th>
                                <th className="py-2 px-4">Total Bet Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-4">@DanielAdams15</td>
                                <td className="py-2 px-4">$1,500</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4">@DanielAdams15</td>
                                <td className="py-2 px-4">$910</td>
                            </tr>
                            {/* Add other rows similarly */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Active Leaderboard Users Chart */}
            <div className="mt-6 p-6 bg-white rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Active Leaderboard Users</h3>
                <ReactApexChart options={barChartOptions} series={barChartData} type="bar" height={350} />
            </div>
        </div>
    );
};

export default Leaderboard;
