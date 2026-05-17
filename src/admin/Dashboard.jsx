import React from "react";
import Sidebar from "../admin/Sidebar";
import {
  Search,
  Bell,
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingBag,
  Activity,
  Menu,
} from "lucide-react";

const Dashboard = () => {
  return (

    /* MAIN LAYOUT */
    <div className="flex bg-[#F5F7FB] min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0">

        {/* TOPBAR */}
        <div className="sticky top-0 z-20 bg-[#F5F7FB]/80 backdrop-blur-xl border-b border-[#E5E7EB] px-4 sm:px-6 py-4">

          <div className="flex items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-3 min-w-0">

              {/* MOBILE MENU */}
              <button className="lg:hidden w-11 h-11 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">

                <Menu size={20} className="text-[#111827]" />

              </button>

              <div className="min-w-0">

                <h1 className="text-[22px] sm:text-[28px] font-bold text-[#111827] tracking-[-1px] truncate">
                  Welcome back, Kashif 👋
                </h1>

                <p className="text-[#6B7280] mt-1 text-sm sm:text-base truncate">
                  Here’s what’s happening with your business today.
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* SEARCH */}
              <div className="hidden md:flex w-[240px] lg:w-[280px] h-[46px] bg-white border border-[#E5E7EB] rounded-2xl px-4 items-center gap-3 shadow-sm">

                <Search size={18} className="text-[#9CA3AF]" />

                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none w-full text-sm text-[#111827] placeholder:text-[#9CA3AF]"
                />

              </div>

              {/* NOTIFICATION */}
              <button className="w-11 h-11 bg-white border border-[#E5E7EB] rounded-2xl flex items-center justify-center shadow-sm relative hover:bg-[#F9FAFB] transition">

                <Bell size={19} className="text-[#4B5563]" />

                <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></div>

              </button>

              {/* BUTTON */}
              <button className="hidden sm:flex h-11 px-5 rounded-2xl bg-indigo-600 text-white items-center gap-2 font-medium hover:bg-indigo-500 transition shadow-lg shadow-indigo-100 text-sm">

                <Plus size={17} />

                Create Report

              </button>

            </div>

          </div>

        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 sm:p-6">

          {/* MOBILE SEARCH */}
          <div className="md:hidden mb-5">

            <div className="w-full h-[46px] bg-white border border-[#E5E7EB] rounded-2xl px-4 flex items-center gap-3 shadow-sm">

              <Search size={18} className="text-[#9CA3AF]" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full text-sm text-[#111827] placeholder:text-[#9CA3AF]"
              />

            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

            {/* CARD */}
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[#6B7280] text-sm">
                    Total Revenue
                  </p>

                  <h1 className="text-[28px] font-bold text-[#111827] mt-2">
                    $48.2K
                  </h1>

                </div>

                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">

                  <DollarSign size={22} className="text-green-600" />

                </div>

              </div>

              <div className="flex items-center gap-2 mt-5">

                <TrendingUp size={16} className="text-green-600" />

                <span className="text-green-600 text-sm font-medium">
                  +12.5%
                </span>

                <span className="text-[#9CA3AF] text-sm">
                  vs last month
                </span>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[#6B7280] text-sm">
                    Active Users
                  </p>

                  <h1 className="text-[28px] font-bold text-[#111827] mt-2">
                    12.4K
                  </h1>

                </div>

                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">

                  <Users size={22} className="text-indigo-600" />

                </div>

              </div>

              <div className="flex items-center gap-2 mt-5">

                <TrendingUp size={16} className="text-green-600" />

                <span className="text-green-600 text-sm font-medium">
                  +8.2%
                </span>

                <span className="text-[#9CA3AF] text-sm">
                  new users
                </span>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[#6B7280] text-sm">
                    Orders
                  </p>

                  <h1 className="text-[28px] font-bold text-[#111827] mt-2">
                    1,240
                  </h1>

                </div>

                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">

                  <ShoppingBag size={22} className="text-orange-500" />

                </div>

              </div>

              <div className="flex items-center gap-2 mt-5">

                <TrendingUp size={16} className="text-green-600" />

                <span className="text-green-600 text-sm font-medium">
                  +4.3%
                </span>

                <span className="text-[#9CA3AF] text-sm">
                  completed orders
                </span>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[#6B7280] text-sm">
                    Conversion Rate
                  </p>

                  <h1 className="text-[28px] font-bold text-[#111827] mt-2">
                    4.8%
                  </h1>

                </div>

                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">

                  <Activity size={22} className="text-red-500" />

                </div>

              </div>

              <div className="flex items-center gap-2 mt-5">

                <TrendingDown size={16} className="text-red-500" />

                <span className="text-red-500 text-sm font-medium">
                  -1.2%
                </span>

                <span className="text-[#9CA3AF] text-sm">
                  this week
                </span>

              </div>

            </div>

          </div>

          {/* BOTTOM SECTION */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_.6fr] gap-6">

            {/* CHART */}
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-5 sm:p-6 shadow-sm">

              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <div>

                  <h1 className="text-[22px] font-bold text-[#111827]">
                    Revenue Analytics
                  </h1>

                  <p className="text-[#6B7280] text-sm mt-1">
                    Monthly performance overview
                  </p>

                </div>

                <button className="h-11 px-4 rounded-2xl border border-[#E5E7EB] text-sm font-medium hover:bg-[#F9FAFB] transition w-full sm:w-auto">
                  Last 6 Months
                </button>

              </div>

              {/* CHART */}
              <div className="flex items-end gap-3 sm:gap-4 h-[240px] sm:h-[320px]">

                <div className="w-full bg-indigo-100 rounded-t-3xl h-[30%]"></div>
                <div className="w-full bg-indigo-200 rounded-t-3xl h-[45%]"></div>
                <div className="w-full bg-indigo-300 rounded-t-3xl h-[55%]"></div>
                <div className="w-full bg-indigo-400 rounded-t-3xl h-[70%]"></div>
                <div className="w-full bg-indigo-500 rounded-t-3xl h-[88%]"></div>
                <div className="w-full bg-indigo-300 rounded-t-3xl h-[60%]"></div>
                <div className="w-full bg-indigo-200 rounded-t-3xl h-[75%]"></div>

              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="space-y-6">

              {/* ACTIVITY */}
              <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 shadow-sm">

                <h1 className="text-[20px] font-bold text-[#111827] mb-6">
                  Recent Activity
                </h1>

                <div className="space-y-5">

                  {/* ITEM */}
                  <div className="flex gap-4">

                    <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex-shrink-0"></div>

                    <div>

                      <h1 className="text-[#111827] font-medium">
                        New user registered
                      </h1>

                      <p className="text-[#6B7280] text-sm mt-1">
                        2 minutes ago
                      </p>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex gap-4">

                    <div className="w-11 h-11 rounded-2xl bg-green-100 flex-shrink-0"></div>

                    <div>

                      <h1 className="text-[#111827] font-medium">
                        Payment completed
                      </h1>

                      <p className="text-[#6B7280] text-sm mt-1">
                        18 minutes ago
                      </p>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex gap-4">

                    <div className="w-11 h-11 rounded-2xl bg-orange-100 flex-shrink-0"></div>

                    <div>

                      <h1 className="text-[#111827] font-medium">
                        New order placed
                      </h1>

                      <p className="text-[#6B7280] text-sm mt-1">
                        1 hour ago
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* GOAL CARD */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-3xl p-6 text-white relative overflow-hidden">

                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                <p className="text-indigo-100 text-sm">
                  Monthly Goal
                </p>

                <h1 className="text-[36px] font-bold mt-3">
                  78%
                </h1>

                <p className="text-indigo-100 mt-3 leading-7 text-sm">
                  Your business growth is on track this month.
                </p>

                <button className="mt-6 w-full h-12 rounded-2xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition">
                  View Details
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;