import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  MousePointerClick,
  Activity,
} from "lucide-react";
 import Sidebar from "../admin/Sidebar";
const Analytics = () => {
  return (
    <div className="flex bg-[#F5F7FB] min-h-screen">
     {/* DESKTOP SIDEBAR */}
         <div className="hidden lg:block">
           <Sidebar />
         </div>
   
         {/* MAIN CONTENT */}
         <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-[28px] sm:text-[32px] font-bold text-[#0F172A] tracking-[-1px]">
          Analytics Overview
        </h1>
        <p className="text-[#64748B] mt-1 text-sm sm:text-base">
          Track your performance, revenue & user growth in real time.
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

        {/* CARD */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm">Total Revenue</p>
              <h1 className="text-[28px] font-bold text-[#0F172A] mt-2">
                $52,480
              </h1>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <DollarSign className="text-green-600" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <TrendingUp size={16} className="text-green-600" />
            <span className="text-green-600 text-sm font-medium">+18.2%</span>
            <span className="text-[#94A3B8] text-sm">vs last month</span>
          </div>
        </div>

        {/* USERS */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm">Active Users</p>
              <h1 className="text-[28px] font-bold text-[#0F172A] mt-2">
                14,320
              </h1>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Users className="text-indigo-600" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <TrendingUp size={16} className="text-green-600" />
            <span className="text-green-600 text-sm font-medium">+9.4%</span>
            <span className="text-[#94A3B8] text-sm">growth</span>
          </div>
        </div>

        {/* CLICKS */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm">Total Clicks</p>
              <h1 className="text-[28px] font-bold text-[#0F172A] mt-2">
                98,120
              </h1>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
              <MousePointerClick className="text-orange-500" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <TrendingDown size={16} className="text-red-500" />
            <span className="text-red-500 text-sm font-medium">-2.1%</span>
            <span className="text-[#94A3B8] text-sm">drop</span>
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#64748B] text-sm">Engagement</p>
              <h1 className="text-[28px] font-bold text-[#0F172A] mt-2">
                76.5%
              </h1>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
              <Activity className="text-red-500" />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <TrendingUp size={16} className="text-green-600" />
            <span className="text-green-600 text-sm font-medium">+3.8%</span>
            <span className="text-[#94A3B8] text-sm">improved</span>
          </div>
        </div>
      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">

        {/* MAIN CHART */}
        <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">
                Revenue Performance
              </h2>
              <p className="text-[#64748B] text-sm mt-1">
                Monthly growth analytics
              </p>
            </div>

            <button className="px-4 py-2 rounded-2xl border border-[#E5E7EB] text-sm hover:bg-[#F8FAFC]">
              This Year
            </button>
          </div>

          {/* FAKE CHART */}
          <div className="flex items-end gap-3 h-[280px] sm:h-[320px]">

            <div className="w-full bg-indigo-100 rounded-t-3xl h-[40%]"></div>
            <div className="w-full bg-indigo-200 rounded-t-3xl h-[55%]"></div>
            <div className="w-full bg-indigo-300 rounded-t-3xl h-[70%]"></div>
            <div className="w-full bg-indigo-400 rounded-t-3xl h-[60%]"></div>
            <div className="w-full bg-indigo-500 rounded-t-3xl h-[85%]"></div>
            <div className="w-full bg-indigo-300 rounded-t-3xl h-[65%]"></div>
            <div className="w-full bg-indigo-200 rounded-t-3xl h-[75%]"></div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">

          {/* TRAFFIC SOURCE */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 shadow-sm">

            <h2 className="text-lg font-bold text-[#0F172A] mb-5">
              Traffic Sources
            </h2>

            <div className="space-y-4">

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#64748B]">Google</span>
                  <span className="font-medium">62%</span>
                </div>
                <div className="w-full h-2 bg-[#EEF2FF] rounded-full">
                  <div className="w-[62%] h-2 bg-indigo-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#64748B]">Direct</span>
                  <span className="font-medium">24%</span>
                </div>
                <div className="w-full h-2 bg-[#EEF2FF] rounded-full">
                  <div className="w-[24%] h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#64748B]">Social</span>
                  <span className="font-medium">14%</span>
                </div>
                <div className="w-full h-2 bg-[#EEF2FF] rounded-full">
                  <div className="w-[14%] h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

          {/* LIVE ACTIVITY */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 shadow-sm">

            <h2 className="text-lg font-bold text-[#0F172A] mb-4">
              Live Activity
            </h2>

            <div className="space-y-4 text-sm">

              <p className="text-[#64748B]">
                🟢 12 new users joined
              </p>

              <p className="text-[#64748B]">
                💳 Payment received $240
              </p>

              <p className="text-[#64748B]">
                📦 New order placed
              </p>

              <p className="text-[#64748B]">
                🚀 Server uptime 99.9%
              </p>

            </div>

          </div>

        </div>

      </div>
      </div>
      </div>
  );
};

export default Analytics;