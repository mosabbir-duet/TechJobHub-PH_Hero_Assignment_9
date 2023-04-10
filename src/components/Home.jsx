import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory";

const Home = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
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
    </div>
  );
};

export default Home;
