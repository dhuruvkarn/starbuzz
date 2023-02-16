import React from "react";
import "./Gender.css";
import Chart from "react-apexcharts";
import { BsPerson } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Gender() {
  var options = {
    series: [
      {
        data: [10, 20, 30, 40, 50, 20, 30, 20],
      },
      {
        data: [7, 10, 20, 30, 40, 10, 20, 30],
      },
    ],

    theme: {
      monochrome: {
        enabled: true,
        color: "#ff5902",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#ff9c66"],
    },
    xaxis: {
      categories: [
        "45-64",
        "35-44",
        "25-34",
        "45-64",
        "35-44",
        "25-34",
        "18-24",
        "13-17",
      ],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };
  return (
    <>
      <div className="genderMainDiv">
        <div className="genderMainHeadingDiv">
          <div className="genderMainHeadingLeftDiv">
            <div>
              <BsPerson className="genderMainHeadingLeftDivImage" />
            </div>
            <div className="genderMainHeadingLeftDivHeading">
              Genders by Age Groups
            </div>
          </div>
          {/* <div className="genderMainHeadingRightDiv"></div> */}
          <div className="genderMainHeadingRightDiv">
            <div className="genderMainHeadingRightImageDiv">
              <span>
                <RxDotFilled className="pieChartDot" />
              </span>
              <span>Male</span>
            </div>
            <div className="genderMainHeadingRightImageDiv">
              <span>
                <RxDotFilled className="pieChartDotFemale" />
              </span>
              <span>Female</span>
            </div>
          </div>
        </div>
        {/* chart */}
        <div className="genderMainChartDiv">
          <Chart options={options} series={options.series} type="bar" />
        </div>
      </div>
    </>
  );
}

export default Gender;
