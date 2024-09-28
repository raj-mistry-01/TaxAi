import React from 'react'
import { useState } from 'react'
import { Outlet } from "react-router-dom";


const Info = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    registrationNumber: "",
    businessType: "",
    yearOfIncorporation: "",
    annualTurnover: "",
    grossRevenue: "",
    domesticIncome: "",
    foreignIncome: "",
    interestIncome: "",
    dividendIncome: "",
    capitalGains: "",
    salaries: "",
    rent: "",
    utilities: "",
    depreciation: "",
    infrastructureInvestment: "",
    employeeSavings: "",
    insurancePremiums: "",
    charitableDonations: "",
    loanInterest: "",
    pensionContributions: "",
    assetsValue: "",
    inventoryValue: "",
    rndExpenses: "",
    rndTaxCredits: "",
    employeeInsurance: "",
    travelCosts: "",
    exportIncome: "",
    foreignTaxCredit: "",
  });
   const updateFormData = (newData) => {
     setFormData((prevData) => ({
       ...prevData,
       ...newData,
     }));
   };

   console.log(formData)
    return (
      <div>
        <Outlet context={{ formData, updateFormData }} />
      </div>
    );
}

export default Info
