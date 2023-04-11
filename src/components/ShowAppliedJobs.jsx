import React from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../utilities/fakedb";
import AppliedJob from "./AppliedJob";

const ShowAppliedJobs = () => {
  const featuresJobs = useLoaderData();
  const savedJob = getAppliedJob();
  let appliedJobs = [];
  for (let id in savedJob) {
    const addJob = featuresJobs.find((job) => job.id === parseInt(id));
    if (addJob) {
      appliedJobs.push(addJob);
    }
  }
  console.log(appliedJobs);
  return (
    <div>
      <section className="py-32 text-center bg-violet-50 mb-10">
        <h1 className="text-3xl font-semibold">Applied Jobs</h1>
      </section>

      <div className="md:container mx-auto grid  px-3 md:px-10  lg:px-0 ">
        {appliedJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
