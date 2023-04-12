import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Here the array of object of Assignment mark which store the assignment information

const AssignmentMarkDashboard = () => {
  const assignmentMark = [
    { id: 1, name: "Assignment 1", Mark: 60 },
    { id: 2, name: "Assignment 2", Mark: 55 },
    { id: 3, name: "Assignment 3", Mark: 60 },
    { id: 4, name: "Assignment 4", Mark: 59 },
    { id: 5, name: "Assignment 5", Mark: 60 },
    { id: 6, name: "Assignment 6", Mark: 60 },
    { id: 7, name: "Assignment 7", Mark: 60 },
    { id: 8, name: "Assignment 8", Mark: 60 },
  ];

  // find average marks from 9 assignment

  let totalMark = 0;
  assignmentMark.forEach((assignment) => {
    totalMark += assignment.Mark;
  });
  const averageMark = totalMark / assignmentMark.length;

  return (
    // header and assignment average marks area

    <div className="flex-col justify-center">
      <div className="py-32 text-center bg-violet-50 mb-10">
        <h1 className="text-3xl font-semibold">Assignment Analytics</h1>
        <p className="text-2xl text-violet-500 my-2">
          <strong>Average Mark: </strong>
          {averageMark}
        </p>
      </div>

      {/* this section for showing Areachart for 9 assignment  */}

      <div className="flex justify-center">
        <AreaChart
          width={960}
          height={400}
          data={assignmentMark}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Mark"
            stroke="#03964f"
            fill="#7884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default AssignmentMarkDashboard;
