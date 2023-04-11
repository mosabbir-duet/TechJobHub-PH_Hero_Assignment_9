import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
const FeatureJob = ({ job }) => {
  const {
    companyLogo,
    id,
    companyName,
    fulltimePartTime,
    jobTitle,
    salary,
    location,
    remoteOnsite,
  } = job;
  console.log(fulltimePartTime);
  return (
    <div className="job-info">
      <img src={companyLogo} alt="" />
      <h1 className=" text-2xl font-medium">{jobTitle}</h1>
      <p className=" text-lg">{companyName}</p>
      <div className="py-3">
        <button className=" btn-job-type">{remoteOnsite}</button>
        <button className=" btn-job-type mt-4 lg:mt-0">
          {fulltimePartTime}
        </button>
      </div>
      <div>
        <span className="py-4">
          <MapPinIcon className="w-6 text-violet-400 inline-block mr-2 items-center" />
          {location}
        </span>
        <span className="ml-2 mt-4 lg:mt-0">
          <CurrencyDollarIcon className="w-6 text-violet-400 inline-block ml-2 " />
          Salary:{salary}
        </span>
      </div>
      <button className="btn-primary my-6">View Details</button>
    </div>
  );
};

export default FeatureJob;
