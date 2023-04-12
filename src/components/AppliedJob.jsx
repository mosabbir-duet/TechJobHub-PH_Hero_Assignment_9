import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
const AppliedJob = ({ job }) => {
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
  return (
    // this component show the applied job information in applied jobs link

    <div>
      <div className="job-info lg:flex mb-5 items-center p-4 md:p-10">
        <div className="md:mr-10 bg-violet-50 p-4 md:p-8 rounded-lg inline-block md:block">
          <img src={companyLogo} alt="" />
        </div>
        <div className="lg:flex w-full justify-between items-center">
          <div className="mt-4 lg:mt-0">
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
              <span className="sm:ml-2 mt-4 lg:mt-0 block sm:inline-block">
                <CurrencyDollarIcon className="w-6 text-violet-400 inline-block mr-2 " />
                Salary: {salary}
              </span>
            </div>
          </div>
          <div>
            <Link to={`/featureJob/${id}`}>
              <button className="btn-primary my-6">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
