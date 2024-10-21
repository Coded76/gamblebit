"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FaChartLine,
    FaUsers,
    FaGamepad,
    FaDollarSign,
    FaBullhorn,
    FaTrophy,
    FaCog,
    FaHome,
} from 'react-icons/fa';

const Sidebar = () => {
    const pathname = usePathname();
    const activeLink = (path) =>
        pathname === path ? 'bg-[#919191] text-[#1E90FF] font-bold' : 'text-[#FFFFFF]';

    return (
        <div className="h-screen fixed top-0 left-0 w-64 bg-[#1C1E26] flex flex-col items-center py-5">
            <div className="mb-10">
                <Image src={'/logo.svg'} width={150} height={150} alt="Logo" />
            </div>
            <ul className="w-full px-4 space-y-4">
                <Link href="/" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/')}`}>
                    <li className="flex items-center w-full">
                        <FaHome className="mr-3" />
                        <span>Overview</span>
                    </li>
                </Link>
                <Link href="/performance" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/performance')}`}>
                    <li className="flex items-center w-full">
                        <FaChartLine className="mr-3" />
                        <span>Performance</span>
                    </li>
                </Link>
                <Link href="/user-engagement" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/user-engagement')}`}>
                    <li className="flex items-center w-full">
                        <FaUsers className="mr-3" />
                        <span>User Engagement</span>
                    </li>
                </Link>
                <Link href="/gamegpt" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/gamegpt')}`}>
                    <li className="flex items-center w-full">
                        <FaGamepad className="mr-3" />
                        <span>GameGPT</span>
                    </li>
                </Link>
                <Link href="/transaction" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/transaction')}`}>
                    <li className="flex items-center w-full">
                        <FaDollarSign className="mr-3" />
                        <span>Transaction</span>
                    </li>
                </Link>
                <Link href="/marketing" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/marketing')}`}>
                    <li className="flex items-center w-full">
                        <FaBullhorn className="mr-3" />
                        <span>Marketing</span>
                    </li>
                </Link>
                <Link href="/leaderboard" className={`flex items-center px-6 py-3 rounded-md cursor-pointer hover:bg-[#919191] ${activeLink('/leaderboard')}`}>
                    <li className="flex items-center w-full">
                        <FaTrophy className="mr-3" />
                        <span>Leaderboard</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
