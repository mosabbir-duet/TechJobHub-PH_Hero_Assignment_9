import React from "react";

const Banner = () => {
  return (
    <div className="pt-16 md:container mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center px-10 md:px-0">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            One Step <br /> Closer To Your <br />
            <span className="text-violet-500"> Dream Job</span>
          </h1>
          <p className="my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] px-6 md:px-5 py-3 rounded-lg text-white font-semibold text-xl  ">
            Get Started
          </button>
        </div>
        <img className="rounded-md" src="images/image.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
