import React from "react";

const JobCategory = ({ category }) => {
  const { name, image, numOfJobsAvailable } = category;
  return (
    <div className="job-category ">
      <div className="bg-violet-200 p-4 inline-block rounded-md">
        <img className=" hover:outline-violet-400" src={image} alt="" />
      </div>
      <h3 className="text-xl font-medium my-2">{name}</h3>
      <p>{numOfJobsAvailable} Jobs Available</p>
    </div>
  );
};

export default JobCategory;
