/** @format */

import React from "react";
import DashBoard from "../../DashBoard/DashBoard";
import { useNavigate, useOutletContext } from "react-router-dom"; // Import useOutletContext
import { FaInfoCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Cookies from "js-cookie"


function ForiegnTransection() {
  // Access formData and updateFormData from the parent using useOutletContext
  const { formData, updateFormData } = useOutletContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update parent form data state
    updateFormData({ [name]: value });
  };

  const handleSubmitUserDetails = async (e) => {
    e.preventDefault();

    // findIdByMail
    const mailId = Cookies.get('mailId');
    console.log(mailId)
    let userId = await fetch("http://localhost:7000/api/getUserDetails/getUserIdByMail",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({email:mailId})
    })
    console.log(userId)
    let json = await userId.json();
    let userid = json[0]._id;
    console.log(userid)
    let response = await fetch("http://localhost:7000/api/getOrganizationDetail/addUserOrganizationDetail",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        userId: userid,
        emailId : mailId,
        generalInformation: {
            organizationName: formData.organizationName,
            registrationNumber: formData.registrationNumber,
            typeOfBusiness: formData.businessType,
            yearOfIncorporation: formData.yearOfIncorporation,
            annualTurnover: formData.annualTurnover
        },
        incomeAndRevenue: {
            grossRevenue: formData.grossRevenue,
            incomeSources: {
                domestic: formData.domesticIncome,
                foreign: formData.foreignIncome,
                interestIncome: formData.interestIncome,
                dividendIncome: formData.dividendIncome,
                capitalGains: formData.capitalGains
            }
        },
        expenses: {
            salariesAndWages: formData.salaries,
            rentLeaseExpenses: formData.rent,
            utilities: formData.utilities,
            depreciationOfFixedAssets: formData.depreciation
        },
        investmentsAndSavings: {
            investmentsInInfrastructure: formData.infrastructureInvestment,
            savingsSchemesForEmployees: formData.employeeSavings,
            insurancePremiumsPaid: formData.insurancePremiums
        },
        deductions: {
            charitableDonations: formData.charitableDonations,
            interestOnBusinessLoans: formData.loanInterest,
            contributionToPensionFunds: formData.pensionContributions
        },
        assetAndInventory: {
            valueOfCurrentAssets: formData.assetsValue,
            inventoryAndGoodsInStock: formData.inventoryValue
        },
        researchAndDevelopment: {
            rdExpenses: formData.rndExpenses,
            eligibleRdTaxCredits: formData.rndTaxCredits
        },
        employeeBenefits: {
            medicalAndHealthInsurance: formData.employeeInsurance,
            travelAndAccommodationCosts: formData.travelCosts
        },
        foreignTransactions: {
            incomeFromExport: formData.exportIncome,
            foreignTaxPaidTaxCreditClaimed: formData.foreignTaxCredit
        }
      })
    });
    let resp = await response.json();
    console.log(resp.status)
    if(resp.status == 201) { // true
      navigate('/dashboard')
    }
    else { // false
      navigate('/dashboard')
    }
    console.log("Submitted Data: ", formData); // This will log the updated formData from the parent
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Information
        </h2>
        <form
          onSubmit={handleSubmitUserDetails}
          className="space-y-10 bg-gray-50 p-6 rounded-lg"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Foreign Transactions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="exportIncome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Income from Export
                </label>
                <input
                  type="number"
                  name="exportIncome"
                  placeholder="Enter export income"
                  value={formData.exportIncome || ""} // Bind the input to formData
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="foreignTaxCredit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Foreign Tax Paid/Tax Credit Claimed
                </label>
                <input
                  type="number"
                  name="foreignTaxCredit"
                  placeholder="Enter foreign tax paid/credit"
                  value={formData.foreignTaxCredit || ""} // Bind the input to formData
                  className="border p-2 rounded-md w-full mt-1 shadow-sm focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/userDetail/employee-benifit")}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Prev Page
          </button>
          <button
            type="submit"
            onClick={handleSubmitUserDetails}
            className="w-40 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ForiegnTransection;
