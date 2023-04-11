import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AssignmentMarkDashboard from "./components/AssignmentMarkDashboard";
import Blog from "./components/Blog";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";
import Main from "./components/layout/Main";
import ShowAppliedJobs from "./components/ShowAppliedJobs";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/featuresJob.json"),
      },
      {
        path: "/featureJob/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/featuresJob.json"),
      },
      {
        path: "/statistics",
        element: <AssignmentMarkDashboard></AssignmentMarkDashboard>,
      },
      {
        path: "/appliedjobs",
        element: <ShowAppliedJobs></ShowAppliedJobs>,
        loader: () => fetch("/featuresJob.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
