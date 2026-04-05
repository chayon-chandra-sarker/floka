import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <div>
        <div>
          <div className="flex justify-center items-center">
            <BiSolidErrorAlt size={100} color="red" />
          </div>
        </div>
        <h2 className="text-2xl font-bold ">Oops, page not found!</h2>
        <p className="py-2">The page you are looking for is not available.</p>
        <Link to="/" className="btn">
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
