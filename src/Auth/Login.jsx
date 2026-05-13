import { Form, Input, Button, Checkbox } from "antd";
import {
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden grid lg:grid-cols-2 shadow-xl">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-[#F8FAFC] border-r border-[#E2E8F0]">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-10">

              <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>

              <div>
                <h1 className="text-[#0F172A] font-semibold text-lg">
                  SleekAdmin
                </h1>

                <p className="text-[#64748B] text-sm">
                  Analytics Platform
                </p>
              </div>

            </div>

            <div>
              <h1 className="text-5xl font-bold leading-tight text-[#0F172A]">
                Grow your SaaS business smarter.
              </h1>

              <p className="text-[#64748B] text-lg leading-8 mt-6">
                Monitor analytics, manage your team, and track
                performance from a single modern dashboard.
              </p>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="space-y-5 mt-10">

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#64748B]">
                  Monthly Revenue
                </p>

                <span className="text-green-600 text-sm font-medium">
                  +12.5%
                </span>
              </div>

              <h1 className="text-4xl font-bold text-[#0F172A]">
                $48,420
              </h1>

              <div className="w-full h-2 rounded-full bg-[#E2E8F0] mt-6 overflow-hidden">
                <div className="w-[72%] h-full bg-indigo-600 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
                <p className="text-[#64748B] text-sm mb-2">
                  Active Users
                </p>

                <h1 className="text-3xl font-bold text-[#0F172A]">
                  12.4K
                </h1>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
                <p className="text-[#64748B] text-sm mb-2">
                  Conversion
                </p>

                <h1 className="text-3xl font-bold text-[#0F172A]">
                  4.8%
                </h1>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-8 lg:p-14 bg-white">

          <div className="w-full max-w-md">

            <div className="mb-10">

              <h1 className="text-4xl font-bold text-[#0F172A] mb-3">
                Welcome back
              </h1>

              <p className="text-[#64748B] text-lg">
                Please enter your account details
              </p>

            </div>

            <Form layout="vertical">

              <Form.Item
                label={
                  <span className="text-[#334155] font-medium">
                    Email Address
                  </span>
                }
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  className="light-input"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="text-[#334155] font-medium">
                    Password
                  </span>
                }
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
                  className="light-input"
                />
              </Form.Item>

              <div className="flex items-center justify-between mb-6">

                <Checkbox>
                  Remember me
                </Checkbox>

                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot Password?
                </a>

              </div>

              <Button
                type="primary"
                size="large"
                block
                className="!h-12 !rounded-xl !bg-indigo-600 hover:!bg-indigo-500 !border-none !font-medium"
              >
                Sign In
                <ArrowRightOutlined />
              </Button>

            </Form>

            {/* DIVIDER */}
            <div className="relative my-8">

              <div className="border-t border-[#E2E8F0]"></div>

              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-[#94A3B8] text-sm">
                OR CONTINUE WITH
              </span>

            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-4">

              <button className="h-12 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] transition font-medium">
                Google
              </button>

              <button className="h-12 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] transition font-medium">
                GitHub
              </button>

            </div>

            <p className="text-center text-[#64748B] mt-10">

              Don’t have an account?

              <span className="text-indigo-600 ml-2 font-medium cursor-pointer hover:text-indigo-500">
                Create account
              </span>

            </p>

          </div>
        </div>

      </div>
    </div>
  );
}