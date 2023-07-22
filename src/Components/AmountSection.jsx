import React from "react";

const AmountSection = () => {
  return (
    <div className="col-span-12 text-lg px-8 pt-[5rem] grid grid-cols-12">
      <div className="col-span-12 items-center gap-x-[1.5rem] grid grid-cols-12">
        <div className="col-span-4 h-[6rem] rounded-full aspect-square">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
            alt="DP"
            className="rounded-full"
          />
        </div>
        <div className="col-span-8 flex flex-col">
          <p className="font-bold text-3xl">Hi Mike,</p>
          <p>Welcome back</p>
        </div>
      </div>
      <div className="col-span-12 gap-y-4 px-[2rem] py-[4rem] grid grid-cols-12">
        <div className="col-span-12  gap-y-2 flex flex-col">
          <p className="font-bold text-2xl">Today</p>
          <p className="font-bold text-5xl">$19,892</p>
          <p className="text-gray-500">Account Balance</p>
        </div>
        <div className="col-span-6 flex flex-col">
          <p className="font-bold text-2xl">$4000</p>
          <p className="text-gray-500">Year To Date</p>
        </div>
        <div className="col-span-6 flex flex-col">
          <p className="font-bold text-2xl">$4000</p>
          <p className="text-gray-500">Total Intrest</p>
        </div>
        <div className="col-span-12"></div>
      </div>
      <div className="col-span-12 px-[2rem] flex justify-center">
        <button className=" py-4 px-6 w-full font-semibold bg-blue-700 text-white text-center rounded-md">
          I want to...
        </button>
      </div>
      <div className="col-span-12 gap-y-4 px-[2rem] pb-[2rem] pt-[6rem] grid grid-cols-12">
        <div className="col-span-12  gap-y-2 flex flex-col">
          <p className="font-bold text-2xl">Recent Transactions</p>
        </div>
        <div className="col-span-12 py-6 border-b-2 border-b-gray-300 flex flex-col">
          <p className="text-gray-500">2020-08-07</p>
          <p className="font-semibold text-lg">
            Withdrawal transfer to Bank-XX11
          </p>
        </div>
        <div className="col-span-12 py-6 border-b-2 border-b-gray-300 flex flex-col">
          <p className="text-gray-500">2020-08-07</p>
          <p className="font-semibold text-lg">
            Withdrawal transfer to Bank-XX11
          </p>
        </div>
        <div className="col-span-12 py-6 border-b-2 border-b-gray-300 flex flex-col">
          <p className="text-gray-500">2020-08-07</p>
          <p className="font-semibold text-lg">
            Withdrawal transfer to Bank-XX11
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmountSection;
