import React from "react";
import Header from "./Header";

const Blog = () => {
  return (
    <div className="px-4  ">
      <Header headerTitle="Blog Page"></Header>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 my-10">
        <div className="text-2xl text-justify ">
          <h1 className="mb-4">
            <strong>What should you use context API in react?</strong>
          </h1>
          <p>
            The Context API helps share data between components which can't
            easily share with props, for example, complex data objects. React
            Context API provides a way to send data like userid, auth, and theme
            data through the component tree without sending any props manually
            at every level.It is very useful for large project in which data can
            be sent to last level.
          </p>
        </div>
        <div className="text-2xl text-justify">
          <h1 className="mb-4">
            <strong>What is custom hook?</strong>
          </h1>
          <p>
            A custom hook is a special JavaScript function whose name starts
            with ‘use’ and can be used to call other hooks. Some major
            differences between a custom React JS hook and React JS components
            in the below: <br /> 1. A custom hook does not require a specific
            signature. <br /> 2. A custom hook always starts with the name
            ‘use’.
            <br />
            Custom React JS hooks offer three major benefits over standard
            library hooks: Reusability, readability, and testability.
          </p>
        </div>

        <div className="text-2xl text-justify">
          <h1 className="mb-4">
            <strong>What is useRef()?</strong>
          </h1>
          <p>
            The hook useRef is a bit similar to useState, it returns an object
            that has a property current inside which we can access using object
            dot notation. That property current takes the value of the argument
            that we pass to the function useRef(). So the hook useRef also
            accepts one argument(the initial value for the property current).
            Also, keep in mind that the returned object will persist for the
            full lifetime of the component. <br />
            useRef is powerful because it's persisted between renders. Unlike
            useState, useRef doesn't cause a component to re-render when the
            value or state changes.
          </p>
        </div>
        <div className="text-2xl text-justify">
          <h1 className="mb-4">
            <strong>What is useMemo()?</strong>
          </h1>
          <p>
            React has a built-in hook called useMemo that allows to memoize
            expensive functions so that can avoid calling them on every render.
            It simply pass in a function and an array of inputs and useMemo will
            only recompute the memoized value when one of the inputs has
            changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
