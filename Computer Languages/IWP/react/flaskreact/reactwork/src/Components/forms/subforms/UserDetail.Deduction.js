/** @format */

import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Deduction() {
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
              Deductions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="charitableDonations"
                  className="block text-sm font-medium text-gray-700"
                >
                  Charitable Donations
                </label>
                <input
                  type="number"
                  name="charitableDonations"
                  value={formData.charitableDonations}
                  placeholder="Enter charitable donations"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="loanInterest"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interest on Business Loans
                </label>
                <input
                  type="number"
                  name="loanInterest"
                  value={formData.loanInterest}
                  placeholder="Enter interest on loans"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="pensionContributions"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contribution to Pension/Retirement Funds
                </label>
                <input
                  type="number"
                  name="pensionContributions"
                  value={formData.pensionContributions}
                  placeholder="Enter pension contributions"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/userDetail/invest-saving")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Preve Page
          </button>
          <button
            onClick={() => navigate("/userDetail/invetory-assets")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default Deduction;
