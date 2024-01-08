"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error]);
  return(
  <div className=" bg-slate-50 h-1/2 w-2/3 flex flex-col justify-center gap-2">
    <h2 className=" text-5xl mx-auto"> Oops! </h2>
    <p>{error.message}</p>
    <button
      className="bg-blue-500 text-3xl mx-auto mt-4 px-4 rounded-lg hover:bg-slate-600 "
      onClick={() => reset()}
    >
      Try again
    </button>
  </div>
  )
};
export default Error;
