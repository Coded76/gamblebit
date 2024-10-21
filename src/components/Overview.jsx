import StatCard from './StatCard';
import TopUsers from './TopUsers';
import ActiveUsersChart from './ActiveUsersChart';
import UserRetentionChart from './UserRetentionChart';
import { TbChevronDown, TbDownload } from 'react-icons/tb';

const Overview = () => {
    const dataBets = {
        series: [{ name: 'Bets', data: [14000, 14500, 15000, 15500, 15012] }],
        options: {
            chart: { type: 'line', height: 70, sparkline: { enabled: true } },
            stroke: { curve: 'smooth', width: 2 },
            colors: ['#1E90FF'],
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], show: false },
            fill: { gradient: { shade: 'light', type: 'horizontal', stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.0 } },
            tooltip: { enabled: false }
        }
    };

    const dataRevenue = {
        series: [{ name: 'Revenue', data: [8200, 8150, 8100, 8050, 8145] }],
        options: {
            chart: { type: 'line', height: 70, sparkline: { enabled: true } },
            stroke: { curve: 'smooth', width: 2 },
            colors: ['#A855F7'],
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], show: false },
            fill: { gradient: { shade: 'light', type: 'horizontal', stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.0 } },
            tooltip: { enabled: false }
        }
    };

    const userList = [
        { name: '@DanielAdams15', betVolume: 1500 },
        { name: '@DanielAdams15', betVolume: 910 },
        { name: '@DanielAdams15', betVolume: 655 }
    ];

    const activeUsersData = {
        series: [
            { name: 'Returning Users', data: [120, 90, 100, 140, 110] },
            { name: 'New Users', data: [80, 60, 70, 90, 80] }
        ],
        options: {
            chart: { type: 'bar', height: 250 },
            plotOptions: { bar: { columnWidth: '50%' } },
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
        }
    };

    const retentionData = {
        series: [
            { name: 'Retention', data: [65, 59, 80, 81, 56] },
            { name: 'Churn', data: [35, 41, 20, 19, 44] }
        ],
        options: {
            chart: { type: 'line', height: 250 },
            xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
        }
    };

    return (
        <>

            <div className='flex md:flex-row flex-col justify-between md:gap-0 pb-10 gap-4 md:items-center'>
                <div className='flex items-center gap-2'>
                    <span className='text-black text-opacity-40'>Dashboard</span>
                    {" > "}
                    <span>Overview</span>
                </div>

                <div className='flex items-center gap-3'>
                    <div className="text-black py-2 px-4 text-[10px] font-semibold w-fit flex gap-4 items-center rounded-3xl bg-[#FFFFFF]">
                        Sep 01 - Oct 01, 2024
                        <TbChevronDown size={16} />
                    </div>
                    <button className='bg-black py-2 px-6 text-white flex items-center justify-center rounded-3xl gap-3'>
                        <TbDownload /> Export
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <StatCard
                    title="Total Bets"
                    value="15,012"
                    chartData={dataBets}
                    percentage="10.4"
                    isIncrease={true}
                    className="lg:col-span-1"
                />
                <StatCard
                    title="Total Revenue"
                    value="$8,145"
                    chartData={dataRevenue}
                    percentage="4.8"
                    isIncrease={false}
                    className="lg:col-span-1"
                />

                <div className="  rounded-md lg:col-span-1">
                    <TopUsers users={userList} />
                </div>

                <div className="lg:col-span-2  rounded-md">
                    <ActiveUsersChart data={activeUsersData} />
                </div>

                <div className="lg:col-span-1 rounded-md">
                    <UserRetentionChart data={retentionData} />
                </div>
            </div>
        </>
    );
};

export default Overview;
