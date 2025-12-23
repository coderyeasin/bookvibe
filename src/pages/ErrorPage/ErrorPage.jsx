import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
