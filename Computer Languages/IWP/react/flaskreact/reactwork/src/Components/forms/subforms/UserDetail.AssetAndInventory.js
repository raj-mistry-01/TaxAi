/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function AssetAndInventory() {
  // Access formData and updateFormData from the outlet context
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
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Asset and Inventory
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="assetsValue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Value of Current Assets
                </label>
                <input
                  type="number"
                  name="assetsValue"
                  value={formData.assetsValue || ""}
                  placeholder="Enter value of current assets"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="inventoryValue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Inventory and Goods in Stock
                </label>
                <input
                  type="number"
                  name="inventoryValue"
                  value={formData.inventoryValue || ""}
                  placeholder="Enter inventory value"
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/userDetail/deduction")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Prev Page
          </button>
          <button
            onClick={() => navigate("/userDetail/research-dev")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default AssetAndInventory;
