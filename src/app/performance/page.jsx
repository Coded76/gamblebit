"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { TbChevronDown, TbDownload } from "react-icons/tb";

const PerformanceDashboard = dynamic(() => import("@/components/PerformanceDashboard"), { ssr: false });

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex">
        <div
          className={`fixed inset-0 z-[1000] transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 w-64 bg-[#1C1E26]`}
        >
          <Sidebar />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-grow sticky top-0 lg:ml-64 overflow-x-hidden">
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />

          <div className="p-8 bg-[#F6F6F6] overflow-x-hidden">

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
            <PerformanceDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
