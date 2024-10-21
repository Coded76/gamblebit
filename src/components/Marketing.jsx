import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ApexCharts to avoid SSR issues
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Marketing = () => {
  // Data for the line charts
  const chartOptions = {
    chart: { type: 'line', toolbar: { show: false }, height: '100%' },
    stroke: { curve: 'smooth' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    dataLabels: { enabled: false },
    grid: { show: false },
    yaxis: { show: false },
    tooltip: { enabled: false }
  };

  const userReferredData = { series: [{ data: [10, 20, 15, 30, 28, 35] }] };
  const referralBonusData = { series: [{ data: [500, 450, 520, 430, 490, 600] }] };

  // Data for the referral table
  const referrals = [
    { user: 'Zain Workman', code: 'ZAIN323', total: 59, claimed: '$3,500' },
    { user: 'Maren George', code: 'MAREN613', total: 46, claimed: '$2,750' },
    { user: 'Martin Kenter', code: 'MARTIN3', total: 39, claimed: '$2,400' },
    { user: 'Erin Franci', code: 'ERIN44R1', total: 31, claimed: '$1,845' },
    { user: 'Gustavo Kenter', code: 'GUSTAV1', total: 23, claimed: '$1,250' },
    // Add more entries as needed
  ];

  // Data for the donut chart
  const referralChannelOptions = {
    labels: ['Social Media', 'User Codes', 'Influencer Partnerships', 'Emails'],
    colors: ['#6E44FF', '#FC5C7D', '#FFD700', '#5B8CFF'],
    legend: { position: 'bottom', fontSize: '14px' },
    chart: {
      height: 280,
      type: 'donut',
    },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: { size: '65%' },
        expandOnClick: false,
      },
    },
  };

  const referralChannelSeries = [55, 25, 15, 5];

  return (
    <div className="">
      {/* Top Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Total Users Referred */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Total Users Referred</h2>
            <span className="text-sm text-green-500">+10.8%</span>
          </div>
          <div className="text-4xl font-bold py-2">2,012</div>
          <ApexChart options={chartOptions} series={userReferredData.series} type="line" height={150} />
        </div>

        {/* Total Referral Bonus Claimed */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Total Referral Bonus Claimed</h2>
            <span className="text-sm text-red-500">-4.8%</span>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <span className="text-4xl font-bold">$19,935</span>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">USDT</span>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">ETH</span>
          </div>
          <ApexChart options={chartOptions} series={referralBonusData.series} type="line" height={150} />
        </div>

        {/* Total Sign Up Bonus Claimed */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Total Sign Up Bonus Claimed</h2>
            <span className="text-sm text-green-500">+10.8%</span>
          </div>
          <div className="text-4xl font-bold py-2">$2,145</div>
          <ApexChart options={chartOptions} series={userReferredData.series} type="line" height={150} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Top User Referrals Table */}
        <div className="lg:col-span-2 bg-white p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Top User Referrals</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-2">User</th>
                <th className="p-2">Referral Code</th>
                <th className="p-2">Total Referrals</th>
                <th className="p-2">Referral Bonus Claimed</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((referral, idx) => (
                <tr key={idx} className="border-b py-2">
                  <td className="p-2">{referral.user}</td>
                  <td className="p-2">{referral.code}</td>
                  <td className="p-2">{referral.total}</td>
                  <td className="p-2">{referral.claimed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Referral Channels Donut Chart */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Referral Channels</h2>
          <ApexChart options={referralChannelOptions} series={referralChannelSeries} type="donut" height={250} />
          <div className="flex justify-center items-center text-center mt-4">
            <div>
              <p className="text-lg font-bold">2,012</p>
              <p className="text-xs text-gray-500">Total Referrals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
