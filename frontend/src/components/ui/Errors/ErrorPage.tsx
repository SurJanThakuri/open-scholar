import { Warning } from "@phosphor-icons/react";
import React from "react";

interface ErrorPageProps {
  path: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ path }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <div className="flex justify-center flex-col items-center gap-4">
        <Warning size={80} color="#fb0909" weight="fill" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-danger mb-4">
          Oops! Something went wrong.
        </h1>
      </div>
      <p className="text-md md:text-base lg:text-lg text-dark-grey mb-8 max-w-md">
        We're sorry, an error occurred while processing your request. Please try
        again later.
      </p>
      <button
        onClick={() => (window.location.href = path)}
        className="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
