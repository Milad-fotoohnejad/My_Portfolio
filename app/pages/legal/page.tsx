import React from "react";

const Legal = () => {
  return (
    <div className="flex flex-col items-center p-5 rounded-md">
      <h1 className="text-6xl font-bold m-5 text-green-400 w-full text-center font-mono">
        Legal Information
      </h1>
      <div className="text-center text-md text-gray-300">
        <p className="mb-4">
          This website uses various resources and icons that are subject to copyright laws and licenses.
        </p>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-green-400">Icons and Resources</h2>
          <p className="mt-2">
            <strong>LottieFiles:</strong> The animations used are provided by Design Barn Inc.
            <br />
            Copyright © 2023 Design Barn Inc. All rights reserved.
          </p>
          <p className="mt-2">
            <strong>Role Model Icons:</strong> Icons used here are created by Flat Icons and provided by Flaticon.
            <br />
            <a
              href="https://www.flaticon.com/free-icons/role-model"
              title="role model icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline"
            >
              Role model icons created by Flat Icons - Flaticon
            </a>
            <br />
            Copyright © Fonticons, Inc. All rights reserved.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-green-400">Acknowledgements</h2>
          <p className="mt-2">
            We acknowledge the use of icons and resources from the above-mentioned providers in creating an engaging user experience on this website.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-green-400">Contact Information</h2>
          <p className="mt-2">
            For any questions or concerns regarding the use of these resources, please contact us at:
            <br />
            <a
              href="mailto:info@yourwebsite.com"
              className="text-green-400 underline"
            >
              info@yourwebsite.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
