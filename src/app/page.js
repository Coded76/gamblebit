"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic"; // Import dynamic
import { useState } from "react";

// Dynamically import the Overview component with SSR disabled
const Overview = dynamic(() => import("@/components/Overview"), { ssr: false });

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex">
        <div
          className={`fixed inset-0 z-[1000] transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
            <Overview /> {/* This component will be rendered on the client side only */}
          </div>
        </div>
      </div>
    </div>
  );
}
