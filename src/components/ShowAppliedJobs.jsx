import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../utilities/fakedb";
import AppliedJob from "./AppliedJob";
import Header from "./Header";

const ShowAppliedJobs = () => {
  const featuresJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const savedJobs = getAppliedJob();

  // To set State for which job are applied by the user. Compare with savedJobs id with all features job and set appliedJobs state

  useEffect(() => {
    let storeAppliedJobs = [];
    for (let id in savedJobs) {
      const addJob = featuresJobs.find((job) => job.id === parseInt(id));
      if (addJob) {
        storeAppliedJobs.push(addJob);
      }
    }
    setAppliedJobs(storeAppliedJobs);
    console.log(storeAppliedJobs);
  }, []);

  // filterAppliedJobs filter specific remote or onsite job depend on the value on parameter and find these job and set state

  const filterAppliedJobs = (typeOfJob) => {
    let storeAppliedJobs = [];
    for (let id in savedJobs) {
      const addJob = featuresJobs.find(
        (job) => job.id === parseInt(id) && job.remoteOnsite === typeOfJob
      );
      if (addJob) {
        storeAppliedJobs.push(addJob);
      }
    }
    setAppliedJobs(storeAppliedJobs);
  };

  // onclick handler for showing Remote job

  const handleToShowRemoteJob = () => {
    filterAppliedJobs("Remote");
  };

  // onclick handler for showing Onsite job

  const handleToShowOnSiteJob = () => {
    filterAppliedJobs("Onsite");
  };

  return (
    <div>
      <Header headerTitle="Applied Jobs"></Header>

      {/* used condition rendering for filter button remote and onsite. If haven't applied any job then don't show remote and onsite filter button and on the other hand if have any applied jobs then show both the button  */}

      {appliedJobs.length && (
        <div className="mb-10 text-center">
          <button onClick={handleToShowRemoteJob} className="btn-primary mr-4">
            Remote
          </button>
          <button onClick={handleToShowOnSiteJob} className="btn-primary">
            Onsite
          </button>
        </div>
      )}

      {/* Pass the individual applied job object using map into Applied job component  */}

      <div className="md:container mx-auto grid  px-3 md:px-10  lg:px-0 ">
        {appliedJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
