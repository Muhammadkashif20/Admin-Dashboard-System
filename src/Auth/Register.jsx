import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center p-4">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1020px] bg-white rounded-[28px] border border-[#E5E7EB] overflow-hidden grid lg:grid-cols-[1.02fr_.98fr] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-[#F8FAFC] p-6 border-r border-[#E5E7EB]">

          {/* TOP CONTENT */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-base">
                S
              </div>

              <div>
                <h1 className="text-[#111827] font-semibold text-[16px]">
                  SleekAdmin
                </h1>

                <p className="text-[#6B7280] text-xs">
                  Modern Workspace
                </p>
              </div>

            </div>

            {/* HEADING */}
            <div className="max-w-md">

              <h1 className="text-[34px] leading-[42px] font-bold text-[#111827] tracking-[-1px]">
                Start building smarter workflows today.
              </h1>

              <p className="text-[#6B7280] text-[14px] leading-7 mt-4">
                Create collaborative workspaces, manage teams,
                and monitor business growth with a modern SaaS dashboard.
              </p>

            </div>

          </div>

          {/* FEATURE SECTION */}
          <div className="space-y-4 mt-6">

            {/* TEAM CARD */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-4 shadow-sm">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[#6B7280] text-sm">
                    Team Collaboration
                  </p>

                  <h1 className="text-[22px] font-bold text-[#111827] mt-2 leading-8">
                    Invite your entire team
                  </h1>

                </div>

                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-lg">
                  👥
                </div>

              </div>

              {/* USERS */}
              <div className="flex items-center gap-3 mt-5">

                <div className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-white"></div>

                <div className="w-9 h-9 rounded-full bg-pink-100 border-2 border-white -ml-4"></div>

                <div className="w-9 h-9 rounded-full bg-green-100 border-2 border-white -ml-4"></div>

                <div className="w-9 h-9 rounded-full bg-yellow-100 border-2 border-white -ml-4"></div>

                <div className="text-sm text-[#6B7280] ml-1">
                  +12 members
                </div>

              </div>

            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-2 gap-4">

              {/* CARD */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm">

                <p className="text-sm text-[#6B7280]">
                  Projects
                </p>

                <h1 className="text-[28px] font-bold text-[#111827] mt-2">
                  245+
                </h1>

                <p className="text-indigo-600 text-sm mt-2">
                  Active workflows
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm">

                <p className="text-sm text-[#6B7280]">
                  Productivity
                </p>

                <h1 className="text-[28px] font-bold text-[#111827] mt-2">
                  86%
                </h1>

                <p className="text-green-600 text-sm mt-2">
                  Team efficiency
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-white p-6 lg:p-8">

          <div className="w-full max-w-sm">

            {/* MOBILE LOGO */}
            <div className="flex lg:hidden items-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                S
              </div>

              <div>
                <h1 className="font-semibold text-[#111827]">
                  SleekAdmin
                </h1>

                <p className="text-sm text-[#6B7280]">
                  Dashboard Platform
                </p>
              </div>

            </div>

            {/* HEADER */}
            <div className="mb-5">

              <h1 className="text-[32px] font-bold text-[#111827] tracking-[-1px]">
                Create account
              </h1>

              <p className="text-[#6B7280] mt-2 text-[14px] leading-6">
                Start managing your SaaS business with a modern dashboard.
              </p>

            </div>

            {/* FORM */}
            <Form layout="vertical">

              {/* FULL NAME */}
              <Form.Item
                label={
                  <span className="text-[#374151] font-medium text-sm">
                    Full Name
                  </span>
                }
                className="mb-3"
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Enter your full name"
                  className="premium-input"
                />
              </Form.Item>

              {/* EMAIL */}
              <Form.Item
                label={
                  <span className="text-[#374151] font-medium text-sm">
                    Email Address
                  </span>
                }
                className="mb-3"
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  className="premium-input"
                />
              </Form.Item>

              {/* PASSWORD */}
              <Form.Item
                label={
                  <span className="text-[#374151] font-medium text-sm">
                    Password
                  </span>
                }
                className="mb-3"
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Create password"
                  className="premium-input"
                />
              </Form.Item>

              {/* OPTIONS */}
              <div className="flex items-center justify-between mb-5">

                <Checkbox className="text-sm">
                  I agree to terms
                </Checkbox>

                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                >
                  Privacy Policy
                </a>

              </div>

              {/* BUTTON */}
              <Button
                type="primary"
                size="large"
                block
                className="!h-[48px] !rounded-2xl !bg-indigo-600 hover:!bg-indigo-500 !border-none !font-medium !text-[15px]"
              >
                Create Account
                <ArrowRightOutlined />
              </Button>

            </Form>

            {/* DIVIDER */}
            <div className="relative my-5">

              <div className="border-t border-[#E5E7EB]"></div>

              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[#9CA3AF] text-[11px] tracking-[2px]">
                OR SIGN UP WITH
              </span>

            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-4">

              <button className="h-11 rounded-2xl border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] transition font-medium text-[#111827] text-sm">
                Google
              </button>

              <button className="h-11 rounded-2xl border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] transition font-medium text-[#111827] text-sm">
                GitHub
              </button>

            </div>

            {/* FOOTER */}
            <p className="text-center text-[#6B7280] mt-5 text-sm">

              Already have an account?

              <Link to="/login">
                <span className="text-indigo-600 ml-2 font-semibold cursor-pointer hover:text-indigo-500">
                  Sign In
                </span>
              </Link>

            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;