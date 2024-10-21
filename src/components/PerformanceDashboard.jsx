import React from 'react';
import ApexCharts from 'react-apexcharts';

const PerformanceDashboard = () => {
    // Data for the charts
    const bettingVolumeChartData = {
        series: [{ data: [8145, 8300, 7500, 8500, 8200] }], // Example data for the last five days
        options: {
            chart: { type: 'line', height: 100 },
            stroke: { curve: 'smooth' },
            colors: ['#b76eff'],
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
        }
    };

    const conversionRateSignUpsData = { percentage: 15, decrease: 4.8 };
    const conversionRateBetsData = { percentage: 72, increase: 12.7 };

    const totalBetsChartData = {
        series: [
            { name: 'Single Bets', data: [6000] }, // Adjust this value as needed
            { name: 'Parlay Bets', data: [4000] } // Adjust this value as needed
        ],
        options: {
            chart: { type: 'bar', height: 100 },
            colors: ['#9c63ff', '#7bb6ff'],
            plotOptions: { bar: { horizontal: false } },
            xaxis: { categories: ['Total Bets'] }
        }
    };

    const revenueOverviewData = {
        series: [
            { name: 'Gross', data: [5000, 5200, 5400, 5300, 5500] },
            { name: 'Transaction Fees', data: [1000, 950, 900, 980, 970] },
            { name: 'Net', data: [4000, 4250, 4500, 4320, 4530] }
        ],
        options: {
            chart: { type: 'line', height: 200 },
            stroke: { curve: 'smooth' },
            colors: ['#9c63ff', '#fa5a5a', '#7bb6ff'],
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
        }
    };

    const acquisitionChannelData = {
        series: [55, 25, 15, 5],
        options: {
            chart: { type: 'donut' },
            labels: ['Referrals', 'Organic Search', 'Social Media', 'Paid Ads'],
            colors: ['#9c63ff', '#7bb6ff', '#fa5a5a', '#fbd34c']
        }
    };

    // Sample data for the table
    const tableData = [
        { event: "Event 1", totalBetPlaced: 150, totalBettingVolume: "$1,200" },
        { event: "Event 2", totalBetPlaced: 200, totalBettingVolume: "$3,400" },
        { event: "Event 3", totalBetPlaced: 120, totalBettingVolume: "$800" },
        { event: "Event 4", totalBetPlaced: 300, totalBettingVolume: "$5,600" },
        { event: "Event 5", totalBetPlaced: 180, totalBettingVolume: "$2,900" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {/* Betting Volume Card */}
            <div className="bg-white  rounded-lg p-6">
                <h3>Betting Volume</h3>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$8,145</span>
                    <span className="text-red-500 text-sm">↓ 4.8% since last week</span>
                </div>
                <ApexCharts options={bettingVolumeChartData.options} series={bettingVolumeChartData.series} type="line" height={150} />
            </div>

            {/* Conversion Rate (Sign Ups) */}
            <div className="bg-white  rounded-lg p-6">
                <h3>Conversion Rate (Sign Ups)</h3>
                <div className="flex flex-col items-start h-full pb-10 justify-around">
                    <span className="text-4xl font-bold">{conversionRateSignUpsData.percentage}%</span>
                    <span className="text-red-500 text-sm">↓ {conversionRateSignUpsData.decrease}% since last week</span>
                </div>
            </div>

            {/* Conversion Rate (Bets Placed) */}
            <div className="bg-white  rounded-lg p-6">
                <h3>Conversion Rate (Bets Placed)</h3>
                <div className="flex flex-col items-start h-full pb-10 justify-around">
                    <span className="text-4xl font-bold">{conversionRateBetsData.percentage}%</span>
                    <span className="text-green-500 text-sm">↑ {conversionRateBetsData.increase}% since last week</span>
                </div>
            </div>

            {/* Total Bets (Bet Type) */}
            <div className="bg-white  rounded-lg p-6">
                <h3>Total Bets (Bet Type)</h3>
                <ApexCharts options={totalBetsChartData.options} series={totalBetsChartData.series} type="bar" height={150} />
            </div>

            {/* Bottom Row: Revenue Overview and Acquisition Channel Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3 lg:col-span-4">
                {/* Revenue Overview */}
                <div className="bg-white  rounded-lg p-6">
                    <h3>Revenue Overview (in $USDT)</h3>
                    <ApexCharts options={revenueOverviewData.options} series={revenueOverviewData.series} type="line" height={250} />
                </div>

                {/* Acquisition Channel Performance */}
                <div className="bg-white  rounded-lg p-6">
                    <h3>Acquisition Channel Performance</h3>
                    <ApexCharts options={acquisitionChannelData.options} series={acquisitionChannelData.series} type="donut" height={250} />
                </div>
            </div>

            {/* Table Component */}
            <div className="bg-white rounded-lg p-6 mt-6 lg:col-span-3">
                <h3 className="mb-4">Betting Events Overview</h3>
                <div className="overflow-x-auto"> {/* Added div for horizontal scrolling */}
                    <table className="min-w-full ">
                        <thead className="">
                            <tr>
                                <th className="text-start p-2">Events</th>
                                <th className="text-start p-2">Total Bet Placed</th>
                                <th className="text-start p-2">Total Betting Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="p-2">{row.event}</td>
                                    <td className="p-2">{row.totalBetPlaced}</td>
                                    <td className="p-2">{row.totalBettingVolume}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PerformanceDashboard;
