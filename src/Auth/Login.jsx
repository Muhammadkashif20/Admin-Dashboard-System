import { Form, Input, Button, Checkbox } from "antd";
import {
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center p-5">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-5xl bg-white rounded-[28px] border border-[#E5E7EB] overflow-hidden grid lg:grid-cols-[1.1fr_.9fr] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-[#F8FAFC] p-8 border-r border-[#E5E7EB]">

          {/* TOP */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-10">

              <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-200">
                S
              </div>

              <div>
                <h1 className="text-[#111827] font-semibold text-[17px]">
                  SleekAdmin
                </h1>

                <p className="text-[#6B7280] text-sm">
                  SaaS Analytics Platform
                </p>
              </div>

            </div>

            {/* HEADING */}
            <div className="max-w-md">

              <h1 className="text-[42px] leading-[52px] font-bold text-[#111827] tracking-[-1px]">
                Manage your business smarter.
              </h1>

              <p className="text-[#6B7280] text-[16px] leading-7 mt-5">
                Powerful analytics, customer insights, and
                modern management tools — all in one dashboard.
              </p>

            </div>

          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="space-y-4 mt-12">

            {/* MAIN CARD */}
            <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-[#6B7280]">
                    Total Revenue
                  </p>

                  <h1 className="text-[34px] font-bold text-[#111827] mt-2">
                    $84,239
                  </h1>
                </div>

                <div className="bg-green-50 text-green-600 text-sm font-semibold px-3 py-2 rounded-xl">
                  +18.4%
                </div>

              </div>

              {/* GRAPH */}
              <div className="flex items-end gap-2 mt-8 h-24">

                <div className="w-full bg-indigo-100 rounded-full h-10"></div>
                <div className="w-full bg-indigo-200 rounded-full h-16"></div>
                <div className="w-full bg-indigo-300 rounded-full h-12"></div>
                <div className="w-full bg-indigo-500 rounded-full h-20"></div>
                <div className="w-full bg-indigo-300 rounded-full h-14"></div>
                <div className="w-full bg-indigo-200 rounded-full h-24"></div>

              </div>

            </div>

            {/* SMALL CARDS */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">

                <p className="text-sm text-[#6B7280]">
                  Active Users
                </p>

                <h1 className="text-3xl font-bold text-[#111827] mt-2">
                  12.4K
                </h1>

                <p className="text-green-600 text-sm mt-2">
                  +6.2% this week
                </p>

              </div>

              <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 shadow-sm">

                <p className="text-sm text-[#6B7280]">
                  Conversion
                </p>

                <h1 className="text-3xl font-bold text-[#111827] mt-2">
                  4.8%
                </h1>

                <p className="text-indigo-600 text-sm mt-2">
                  High engagement
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-white p-8 lg:p-10">

          <div className="w-full max-w-sm">

            {/* MOBILE LOGO */}
            <div className="flex lg:hidden items-center gap-3 mb-10">

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
            <div className="mb-8">

              <h1 className="text-[34px] font-bold text-[#111827] tracking-[-1px]">
                Welcome back
              </h1>

              <p className="text-[#6B7280] mt-3 text-[15px] leading-6">
                Enter your credentials to access your dashboard.
              </p>

            </div>

            {/* FORM */}
            <Form layout="vertical">

              <Form.Item
                label={
                  <span className="text-[#374151] font-medium">
                    Email Address
                  </span>
                }
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  className="premium-input"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-[#374151] font-medium">
                    Password
                  </span>
                }
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                  className="premium-input"
                />
              </Form.Item>

              {/* OPTIONS */}
              <div className="flex items-center justify-between mb-7">

                <Checkbox>
                  Remember me
                </Checkbox>

                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                >
                  Forgot Password?
                </a>

              </div>

              {/* BUTTON */}
              <Button
                type="primary"
                size="large"
                block
                className="!h-[52px] !rounded-2xl !bg-indigo-600 hover:!bg-indigo-500 !border-none !font-medium !text-[15px]"
              >
                Sign In
                <ArrowRightOutlined />
              </Button>

            </Form>

            {/* DIVIDER */}
            <div className="relative my-7">

              <div className="border-t border-[#E5E7EB]"></div>

              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[#9CA3AF] text-xs tracking-[2px]">
                OR CONTINUE WITH
              </span>

            </div>

            {/* SOCIAL */}
            <div className="grid grid-cols-2 gap-4">

              <button className="h-12 rounded-2xl border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] transition font-medium text-[#111827]">
                Google
              </button>

              <button className="h-12 rounded-2xl border border-[#E5E7EB] bg-white hover:bg-[#F9FAFB] transition font-medium text-[#111827]">
                GitHub
              </button>

            </div>

            {/* FOOTER */}
            <p className="text-center text-[#6B7280] mt-8 text-sm">

              Don’t have an account?
            <Link to="/register">
              <span className="text-indigo-600 ml-2 font-semibold cursor-pointer hover:text-indigo-500">
                Create account
              </span>
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}