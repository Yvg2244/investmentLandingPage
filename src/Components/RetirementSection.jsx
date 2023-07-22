import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const RetirementSection = () => {
  const data = {
    labels: ["20", "25", "30", "35", "40", "45", "50"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 25, 30, 35, 45, 55, 60],
        backgroundColor: "#1E3A8A",
      },
      {
        label: "Dataset 2",
        data: [50, 75, 100, 125, 175, 200, 250],
        backgroundColor: "#BFDBFE",
      },
      {
        label: "Dataset 3",
        data: [90, 110, 160, 200, 250, 280, 300],
        backgroundColor: "#3B82F6",
      },
    ],
  };
  // const data= [50, 75, 100, 125, 175, 200, 250]

  return (
    <div className="col-span-12 text-lg px-8 h-[auto] pb-[5rem] grid grid-cols-12">
      <div className="col-span-12 mb-4 items-start gap-y-2 flex flex-col">
        <p className="font-semibold text-2xl text-blue-600">
          Retirement Income
        </p>
        <p className="font-semibold text-4xl ">Starting Year 2056</p>
      </div>
      <div className="col-span-12 items-start gap-4 gapx-8 grid grid-cols-12">
        <div className="col-span-12 py-4 gap-y-2 border-b-blue-400 border-b-2 flex flex-col font-semibold text-2xl">
          <p className="font-bold text-4xl">$300,000</p>
          <p className="text-gray-500 text-xl">My Goal</p>
        </div>
        <div className="col-span-6 py-4 gap-y-2 border-b-blue-400 border-b-2 flex flex-col font-semibold text-2xl">
          <p className="font-bold text-3xl">59%</p>
          <p className="text-gray-500 text-sm">Goal Achieved</p>
        </div>
        <div className="col-span-6 py-4 gap-y-2 border-b-blue-400 border-b-2 flex flex-col font-semibold text-2xl">
          <p className="font-bold text-3xl">K 300</p>
          <p className="text-gray-500 text-sm">Est. Monthly Income</p>
        </div>
      </div>
      <div className="col-span-12 mt-[4rem] mb-[1rem] items-start gap-y-2 flex flex-col">
        <p className="font-semibold text-xl ">Contributions Overtime</p>
      </div>
      <div className="col-span-12 items-start text-sm gap-4 gapx-8 grid grid-cols-12">
        <div className="col-span-4  flex flex-col gap-1">
          <div className="bg-blue-900 h-4 w-6 rounded-xl"></div>
          <div className="text-gray-400">Employer</div>
          <div className="font-bold text-lg">$73,500</div>
        </div>
        <div className="col-span-4 flex flex-col gap-1">
          <div className="bg-blue-500 h-4 w-6 rounded-xl"></div>
          <div className="text-gray-400">Employee</div>
          <div className="font-bold text-lg">$128,500</div>
        </div>
        <div className="col-span-4 flex flex-col gap-1">
          <div className="bg-blue-200 h-4 w-6 rounded-xl"></div>
          <div className="text-gray-400">Total Intrest</div>
          <div className="font-bold text-lg">$30,500,500</div>
        </div>
      </div>
      <div className="col-span-12 my-8 h-fit">
        <Bar
          className="h-full w-full"
          data={data}
          options={{
            plugins: {
              title: {
                display: false,
                text: "Chart.js Bar Chart - Stacked",
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                beginAtZero: true,
                max: 300,
                ticks: {
                  stepSize: 20,
                },
              },
            },
          }}
        />
      </div>
      <div className="col-span-12 mb-4 items-start gap-y-2 flex flex-col">
        <p className="font-semibold text-2xl ">How do I compare to my peers?</p>
        <p className="text-gray-500 text-sm">
          These numbers represent current goal achievements
        </p>
      </div>
      <div className="col-span-12 text-sm mb-4 items-start gap-y-2 grid grid-cols-12">
        <p className="col-span-3 font-bold">Age:</p>
        <p className="col-span-9 ">Under 30</p>
        <p className="col-span-3 font-bold">Age:</p>
        <p className="col-span-9 ">Under 30</p>

        <p className="col-span-3 font-bold">Age:</p>
        <p className="col-span-9 ">Under 30</p>
      </div>
    </div>
  );
};

export default RetirementSection;
