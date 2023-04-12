import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../utilities/fakedb";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobDetails = () => {
  const params = useParams();
  const { jobId } = params;
  const intJobId = parseInt(jobId);
  const jobs = useLoaderData();
  const desiredJob = jobs.find((job) => job.id === intJobId);
  // console.log(typeof jobId, desiredJob);

  const {
    id,
    educationalRequirements,
    experiences,
    jobDescription,
    jobResponsibilities,
    jobTitle,
    location,
    salary,
  } = desiredJob;
  // console.log(desiredJob.contactInformation.email);

  //  Use this userEffect for prevent to scroll Restoration problem. Without using this the job details page showed content from bottom
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleToJobApply = () => {
    addToDb(id);
  };
  return (
    <div>
      <section className="py-32 text-center bg-violet-50 mb-10">
        <h1 className="text-3xl font-semibold">Job Details</h1>
      </section>
      <section>
        <div className="md: container mx-auto lg:flex gap-12 px-10">
          <div className="flex-auto lg:w-7/12">
            <div className="job-details-info">
              <strong>Job Description:</strong> <span>{jobDescription}</span>
            </div>
            <div className="job-details-info">
              <span>
                <strong>Job Responsibility: </strong>
              </span>
              <span>{jobResponsibilities}</span>
            </div>
            <div className="job-details-info">
              <strong>Educational Requirements: </strong>
              <p>{educationalRequirements}</p>
            </div>
            <div className="job-details-info">
              <strong>Experiences: </strong>
              <p>{experiences}</p>
            </div>
          </div>
          <div className=" flex-auto ">
            <div className="bg-violet-100 rounded-md p-8">
              <div>
                <h1 className="text-2xl font-medium pb-4 border-b-2 border-violet-200">
                  Job Details
                </h1>
                <div className="my-5 text-lg">
                  <span className="mt-4 lg:mt-0 ">
                    <CurrencyDollarIcon className="w-6 text-violet-400 inline-block mr-2" />
                    Salary: {salary}
                  </span>
                  <h1 className="mt-2 ">
                    <strong>Job Title:</strong> {jobTitle}
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-medium pb-4 border-b-2 border-violet-200">
                  Contact Information:
                </h1>
                <div className="my-5 text-lg">
                  <p>Phone: {desiredJob.contactInformation.phone}</p>
                  <p className="my-2 ">
                    Email: {desiredJob.contactInformation.email}
                  </p>
                  <span className="py-4">
                    <MapPinIcon className="w-6 text-violet-400 inline-block mr-2 items-center" />
                    {location}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleToJobApply}
                className=" btn-primary  my-5 w-full "
              >
                Apply Now
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
