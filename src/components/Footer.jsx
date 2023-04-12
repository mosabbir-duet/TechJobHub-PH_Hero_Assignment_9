import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className=" bg-gray-950 mt-16 pb-16 ">
        <div className="container mx-auto grid md:grid-cols-3  gap-16 py-16 px-6 border-b border-violet-300 ">
          <div className="px-4">
            <h1 className="text-3xl font-semibold mb-5 text-white">
              TechJob<span className="text-violet-500">Hub</span>
            </h1>
            <p className="mb-4 text-white">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className=" flex">
              <div className=" h-8 w-8 bg-white rounded-full text-center">
                <FontAwesomeIcon
                  className="p-2 text-lg text-sky-300 "
                  icon={faFacebookF}
                />
              </div>
              <div className="mx-4 h-8 w-8 bg-white rounded-full text-center">
                <FontAwesomeIcon
                  className="p-2 text-lg text-cyan-400 "
                  icon={faTwitter}
                />
              </div>
              <div className=" h-8 w-8 bg-white rounded-full text-center">
                <FontAwesomeIcon
                  className="p-2 text-lg text-red-400 "
                  icon={faInstagram}
                />
              </div>
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-3xl font-semibold mb-5 text-white">
              Quick Link
            </h1>
            <nav className=" text-white text-lg">
              <Link className="block mb-3" to="/">
                Home
              </Link>
              <Link className="block mb-3" to="/statistics">
                Statistics
              </Link>
              <Link className="block mb-3" to="/appliedjobs">
                Applied Jobs
              </Link>
              <Link className="block" to="/blog">
                Blog
              </Link>
            </nav>
          </div>
          <div className="text-white text-lg ">
            <h1 className="text-3xl font-semibold mb-5 text-white">Contact</h1>
            <p className="mb-3">+88000000000000</p>
            <p>Email: techjobhub@exmaple.com</p>
          </div>
        </div>
        <div className="container mx-auto flex justify-between px-4 text-gray-200 mt-8 text-lg">
          <span>&copy;2023 TechJobHub. All Rights Reserved</span>
          <span>Powered by TechJobHub</span>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Footer;
