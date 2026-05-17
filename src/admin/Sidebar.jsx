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

const Sidebar = () => {
    const menuItems = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            active: true,
        },
        {
            title: "Analytics",
            icon: <BarChart3 size={20} />,
        },
        {
            title: "Customers",
            icon: <Users size={20} />,
        },
        {
            title: "Orders",
            icon: <ShoppingCart size={20} />,
        },
        {
            title: "Finance",
            icon: <Wallet size={20} />,
        },
        {
            title: "Notifications",
            icon: <Bell size={20} />,
        },
    ];

    const bottomItems = [
        {
            title: "Support",
            icon: <LifeBuoy size={20} />,
        },
        {
            title: "Settings",
            icon: <Settings size={20} />,
        },
    ];

    return (
        <div className="w-[280px] h-screen sticky top-0 bg-white border-r border-[#E5E7EB] flex flex-col justify-between px-5 py-6 overflow-y-auto custom-scrollbar">

            {/* TOP */}
            <div>

                {/* LOGO */}
                <div className="flex items-center gap-3 mb-10 px-2">

                    <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                        S
                    </div>

                    <div>
                        <h1 className="text-[#111827] font-semibold text-[17px]">
                            SleekAdmin
                        </h1>

                        <p className="text-[#6B7280] text-sm">
                            SaaS Dashboard
                        </p>
                    </div>

                </div>

                {/* WORKSPACE */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 flex items-center justify-between mb-8">

                    <div>

                        <p className="text-[#6B7280] text-xs">
                            Workspace
                        </p>

                        <h1 className="text-[#111827] font-semibold mt-1">
                            Growth Team
                        </h1>

                    </div>

                    <ChevronDown size={18} className="text-[#6B7280]" />

                </div>

                {/* MENU */}
                <div className="space-y-2">

                    <p className="text-xs text-[#9CA3AF] font-semibold px-3 mb-3 tracking-[1px]">
                        MAIN MENU
                    </p>

                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full h-[52px] rounded-2xl flex items-center gap-4 px-4 transition-all duration-200 group
              
              ${item.active
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                                    : "text-[#4B5563] hover:bg-[#F8FAFC]"
                                }
              
              `}
                        >

                            <div
                                className={`${item.active
                                        ? "text-white"
                                        : "text-[#6B7280] group-hover:text-[#111827]"
                                    }`}
                            >
                                {item.icon}
                            </div>

                            <span className="font-medium text-[15px]">
                                {item.title}
                            </span>

                        </button>
                    ))}

                </div>

                {/* PRO CARD */}
                <div className="mt-8 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-3xl p-5 text-white relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                    <p className="text-sm text-indigo-100">
                        Upgrade Plan
                    </p>

                    <h1 className="text-2xl font-bold mt-2 leading-9">
                        Get Pro Features
                    </h1>

                    <p className="text-indigo-100 text-sm mt-3 leading-6">
                        Unlock advanced analytics and team management tools.
                    </p>

                    <button className="mt-5 w-full h-11 rounded-2xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition">
                        Upgrade Now
                    </button>

                </div>

            </div>

            {/* BOTTOM */}
            <div>

                {/* BOTTOM MENU */}
                <div className="space-y-2 mb-6">

                    {bottomItems.map((item, index) => (
                        <button
                            key={index}
                            className="w-full h-[52px] rounded-2xl flex items-center gap-4 px-4 text-[#4B5563] hover:bg-[#F8FAFC] transition-all duration-200"
                        >

                            <div className="text-[#6B7280]">
                                {item.icon}
                            </div>

                            <span className="font-medium text-[15px]">
                                {item.title}
                            </span>

                        </button>
                    ))}

                </div>

                {/* USER PROFILE */}
                <div className="border border-[#E5E7EB] rounded-2xl p-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                            MK
                        </div>

                        <div>

                            <h1 className="text-[#111827] font-semibold text-sm">
                                Muhammad Kashif
                            </h1>

                            <p className="text-[#6B7280] text-xs">
                                Frontend Developer
                            </p>

                        </div>

                    </div>

                    <button className="w-9 h-9 rounded-xl hover:bg-[#F3F4F6] flex items-center justify-center transition">

                        <LogOut size={18} className="text-[#6B7280]" />

                    </button>

                </div>

            </div>

        </div>
    );
};

export default Sidebar;