import React from 'react';
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function UserEngagement() {
    // Bar chart for active users
    const activeUsersOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
        },
        colors: ['#a78bfa', '#7dd3fc'],
    };

    const activeUsersSeries = [
        {
            name: 'Returning Users',
            data: [320, 400, 450, 480, 550, 500, 450],
        },
        {
            name: 'New Users',
            data: [150, 230, 300, 320, 350, 360, 330],
        },
    ];

    // Donut chart for acquisition channel performance
    const acquisitionOptions = {
        labels: ['Referrals', 'Organic Search', 'Social Media', 'Paid Ads'],
        colors: ['#8b5cf6', '#6b7280', '#3b82f6', '#f43f5e'],
    };

    const acquisitionSeries = [55, 25, 15, 5];

    // Line chart for retention and churn
    const retentionOptions = {
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

    const retentionSeries = [
        {
            name: 'Retention',
            data: [60, 65, 70, 68, 72, 75, 78],
        },
        {
            name: 'Churn',
            data: [20, 18, 15, 17, 12, 10, 8],
        },
    ];

    // Bar chart for user engagement per feature
    const engagementOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
        },
        colors: ['#8b5cf6', '#fb923c', '#10b981'],
    };

    const engagementSeries = [
        {
            name: 'GambleGPT',
            data: [320, 300, 280, 350, 360, 370, 400],
        },
        {
            name: 'Discover',
            data: [150, 130, 120, 170, 180, 160, 190],
        },
        {
            name: 'Leaderboards',
            data: [100, 90, 80, 120, 130, 110, 150],
        },
    ];

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Active Users Chart */}
                <div className="md:col-span-2 bg-white p-6 rounded-lg ">
                    <h2 className="text-2xl font-semibold mb-4">Active Users</h2>
                    <Chart options={activeUsersOptions} series={activeUsersSeries} type="bar" height={350} />
                    <p className="text-xl mt-4">Total Active Users: 1,012</p>
                </div>

                {/* Acquisition Channel Performance */}
                <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-2xl font-semibold mb-4">Acquisition Channel Performance</h2>
                    <Chart options={acquisitionOptions} series={acquisitionSeries} type="donut" height={350} />
                    <p className="text-xl mt-4">Total Users: 5,012</p>
                </div>
            </div> 

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* User Retention and Churn */}
                <div className="bg-white p-6 rounded-lg md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">User Retention & Churn</h2>
                    <Chart options={retentionOptions} series={retentionSeries} type="line" height={350} />
                </div>

                {/* Top Users */}
                <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-2xl font-semibold mb-4">Top Users</h2>
                    <ul className="space-y-2">
                        <li className="text-lg border-b border-black border-opacity-20 flex justify-between py-3"><span>@DanielAdams15 </span> <span>$910</span></li>
                        <li className="text-lg border-b border-black border-opacity-20 flex justify-between py-3"><span>@DanielAdams15 </span> <span>$655</span></li>
                        <li className="text-lg border-b border-black border-opacity-20 flex justify-between py-3"><span>@DanielAdams15 </span> <span>$655</span></li>
                        <li className="text-lg border-b border-black border-opacity-20 flex justify-between py-3"><span>@DanielAdams15 </span> <span>$655</span></li>
                        <li className="text-lg border-b border-black border-opacity-20 flex justify-between py-3"><span>@DanielAdams15 </span> <span>$1,500</span></li>
                    </ul>
                </div>
            </div>

            {/* User Engagement per Feature */}
            <div className="bg-white p-6 rounded-lg  mt-6">
                <h2 className="text-2xl font-semibold mb-4">User Engagement per Feature</h2>
                <Chart options={engagementOptions} series={engagementSeries} type="bar" height={350} />
            </div>
        </div>
    );
}
