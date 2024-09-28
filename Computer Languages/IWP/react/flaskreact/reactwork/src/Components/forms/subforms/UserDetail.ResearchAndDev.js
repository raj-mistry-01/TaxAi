/** @format */

import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function ResearchAndDevelopment() {
  const { formData, updateFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
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
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Research and Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="rndExpenses"
                  className="block text-sm font-medium text-gray-700"
                >
                  R&D Expenses
                </label>
                <input
                  type="number"
                  name="rndExpenses"
                  value={formData.rndExpenses}
                  placeholder="Enter R&D expenses"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="rndTaxCredits"
                  className="block text-sm font-medium text-gray-700"
                >
                  Eligible R&D Tax Credits
                </label>
                <input
                  type="number"
                  name="rndTaxCredits"
                  value={formData.rndTaxCredits}
                  placeholder="Enter R&D tax credits"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/userDetail/invetory-assets")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Preve Page
          </button>
          <button
            onClick={() => navigate("/userDetail/employee-benifit")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default ResearchAndDevelopment;
