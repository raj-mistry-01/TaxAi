/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function GeneralInformation() {
  const { formData, updateFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value }); 
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Information
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-10 bg-gray-50 p-6 rounded-lg"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              General Information
            </h3>.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName} // Use parent state
                  placeholder="Enter organization name"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="registrationNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Registration Number (PAN/TAN)
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber} // Use parent state
                  placeholder="Enter registration number"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type of Business
                </label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType} // Use parent state
                  placeholder="e.g., LLC, Sole Proprietorship"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="yearOfIncorporation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Year of Incorporation
                </label>
                <input
                  type="number"
                  name="yearOfIncorporation"
                  value={formData.yearOfIncorporation} // Use parent state
                  placeholder="e.g., 2021"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="annualTurnover"
                  className="block text-sm font-medium text-gray-700"
                >
                  Annual Turnover
                </label>
                <input
                  type="number"
                  name="annualTurnover"
                  value={formData.annualTurnover} // Use parent state
                  placeholder="Enter annual turnover"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/userDetail/revenue")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default GeneralInformation;
