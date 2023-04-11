import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeatureJob from "./FeatureJob";
import JobCategory from "./JobCategory";

const Home = () => {
  const [jobCategory, setJobCategory] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState(true);
  const datum = useLoaderData();

  useEffect(() => {
    setJobs(datum.slice(0, 4));
  }, []);
  const handleToShowAllJobs = (flags) => {
    if (flags) {
      setJobs(datum);
    } else {
      setJobs(datum.slice(0, 4));
    }
    setStatus(!flags);
  };

  useEffect(() => {
    fetch("/jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);
  return (
    <div>
      <section className="bg-violet-50 mb-10">
        <div className="md:container mx-auto pb-14">
          <Banner></Banner>
        </div>
      </section>
      <section className="md:container mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-bold text-5xl mb-4">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10  lg:px-0 ">
          {jobCategory.map((category) => (
            <JobCategory key={category.id} category={category}></JobCategory>
          ))}
        </div>
      </section>
      <section className="md:container mx-auto my-10">
        <div className="text-center mb-8">
          <h1 className="font-bold text-5xl mb-4">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid md:grid-cols-2  gap-14 px-10  lg:px-0 ">
          {jobs.map((job) => (
            <FeatureJob key={job.id} job={job}></FeatureJob>
          ))}
        </div>
      </section>

      <button
        onClick={() => {
          handleToShowAllJobs(status);
        }}
        className="btn-primary text-center mx-auto block"
      >
        {status ? "See All Jobs" : "See Less Jobs"}
      </button>
    </div>
  );
};

export default Home;
