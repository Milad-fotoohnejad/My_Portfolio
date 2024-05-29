import React from "react";
import { useRouter } from "next/router";

const Legal = () => {
  return (
    <div className="mobile-v flex flex-col items-center justify-between op-back p-5 rounded-md font-sans">
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
          <h2 className="text-3xl font-semibold text-green-400">Terms of Use</h2>
          <p className="mt-2">
            By using this website, you agree to comply with and be bound by the following terms and conditions of use. These terms govern your use of this website, including all materials, documents, and information presented herein. If you disagree with any part of these terms, please do not use our website.
          </p>
          <p className="mt-2">
            The content provided on this website is for informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-green-400">Privacy Policy</h2>
          <p className="mt-2">
            We are committed to protecting your privacy. This policy outlines how we handle your personal information. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p className="mt-2">
            We collect and use personal information solely for the purpose of providing and improving our services. By using the website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-green-400">Contact Information</h2>
          <p className="mt-2">
            For any questions or concerns regarding the use of these resources, please refer to the contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
