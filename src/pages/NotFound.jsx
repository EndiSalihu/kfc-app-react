import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 items-center mt-64">
      <h1 className="text-red-600 text-3xl">Error 404: Page not found!</h1>

      <div className="flex gap-10">
        <button className="bg-red-600 text-white p-2 hover:bg-red-800 rounded-md w-36" 
        onClick={() => navigate("/")}>Home Page</button>

        <button className="bg-red-600 text-white p-2 hover:bg-red-800 rounded-md w-36" 
        onClick={() => navigate(-1)}>Previous Page</button>
      </div>
    </div>
  );
};

export default NotFound;
