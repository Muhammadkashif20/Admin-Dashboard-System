import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Wallet,
  Settings,
  Bell,
  LifeBuoy,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
    { title: "Analytics", icon: <BarChart3 size={20} /> , Link: "/analytics"},
    { title: "Customers", icon: <Users size={20} /> },
    { title: "Orders", icon: <ShoppingCart size={20} /> },
    { title: "Finance", icon: <Wallet size={20} /> },
    { title: "Notifications", icon: <Bell size={20} /> },
  ];

  const bottomItems = [
    { title: "Support", icon: <LifeBuoy size={20} /> },
    { title: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-[280px] h-screen sticky top-0 bg-[#FFFFFF] border-r border-[#EAECEF] flex flex-col justify-between overflow-y-auto custom-scrollbar">

      {/* TOP SECTION */}
      <div className="px-5 py-6">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
            S
          </div>

          <div>
            <h1 className="text-[#0F172A] font-semibold text-[16px] leading-5">
              SleekAdmin
            </h1>
            <p className="text-[#94A3B8] text-xs mt-0.5">
              SaaS Dashboard
            </p>
          </div>
        </div>

        {/* WORKSPACE */}
        <div className="bg-[#F8FAFC] border border-[#EAECEF] rounded-2xl p-4 flex items-center justify-between mb-8 hover:bg-[#F1F5F9] transition">
          <div>
            <p className="text-[#94A3B8] text-xs">Workspace</p>
            <h2 className="text-[#0F172A] font-semibold text-sm mt-1">
              Growth Team
            </h2>
          </div>

          <ChevronDown size={18} className="text-[#94A3B8]" />
        </div>

        {/* MENU */}
        <div className="space-y-1">
          <p className="text-xs text-[#94A3B8] font-semibold px-3 mb-3 tracking-widest">
            MAIN MENU
          </p>

          {menuItems.map((item, i) => (
            <Link to={item.Link} key={i}>
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition relative
              
              ${
                item.active
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-[#475569] hover:bg-[#F8FAFC]"
              }
              `}
            >
              {/* ACTIVE BAR */}
              {item.active && (
                <span className="absolute left-0 top-2 bottom-2 w-[4px] bg-indigo-600 rounded-r-full"></span>
              )}

              <span className={item.active ? "text-indigo-600" : "text-[#64748B]"}>
                {item.icon}
              </span>

              {item.title}
            </button>
            </Link>
          ))}
        </div>

        {/* UPGRADE CARD */}
        <div className="mt-8 p-5 rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white relative overflow-hidden">

          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

          <h3 className="text-sm text-indigo-100">Upgrade Plan</h3>

          <h2 className="text-lg font-bold mt-2 leading-6">
            Unlock Pro Features
          </h2>

          <p className="text-indigo-100 text-xs mt-2 leading-5">
            Advanced analytics, reports & team tools.
          </p>

          <button className="mt-4 w-full h-10 rounded-xl bg-white text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="px-5 pb-6">

        {/* SUPPORT / SETTINGS */}
        <div className="space-y-1 mb-5">
          {bottomItems.map((item, i) => (
            <button
              key={i}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#475569] hover:bg-[#F8FAFC] transition text-[14px]"
            >
              <span className="text-[#64748B]">{item.icon}</span>
              {item.title}
            </button>
          ))}
        </div>

        {/* USER */}
        <div className="flex items-center justify-between p-3 rounded-2xl border border-[#EAECEF] hover:bg-[#F8FAFC] transition">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600 text-sm">
              MK
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0F172A]">
                Muhammad Kashif
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Frontend Developer
              </p>
            </div>
          </div>

          <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#F1F5F9] transition">
            <LogOut size={18} className="text-[#64748B]" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;