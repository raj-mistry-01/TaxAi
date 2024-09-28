const mongoose = require('mongoose');

const taxDeductionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'UserCredentials' 
  },
  emailId : {
    type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/
  },
  generalInformation: {
    organizationName: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    typeOfBusiness: { type: String, required: true }, 
    yearOfIncorporation: { type: Number, required: true },
    annualTurnover: { type: Number, required: true },
  },
  incomeAndRevenue: {
    grossRevenue: { type: Number, required: true },
    incomeSources: {
      domestic: { type: Number, required: true },
      foreign: { type: Number, required: true },
      interestIncome: { type: Number, required: true },
      dividendIncome: { type: Number, required: true },
      capitalGains: { type: Number, required: true },
    },
  },
  expenses: {
    salariesAndWages: { type: Number, required: true },
    rentLeaseExpenses: { type: Number, required: true },
    utilities: { type: Number, required: true },
    depreciationOfFixedAssets: { type: Number, required: true },
  },
  investmentsAndSavings: {
    investmentsInInfrastructure: { type: Number, required: true },
    savingsSchemesForEmployees: { type: Number, required: true },
    insurancePremiumsPaid: { type: Number, required: true },
  },
  deductions: {
    charitableDonations: { type: Number, required: true },
    interestOnBusinessLoans: { type: Number, required: true },
    contributionToPensionFunds: { type: Number, required: true },
  },
  assetAndInventory: {
    valueOfCurrentAssets: { type: Number, required: true },
    inventoryAndGoodsInStock: { type: Number, required: true },
  },
  researchAndDevelopment: {
    rdExpenses: { type: Number, required: true },
    eligibleRdTaxCredits: { type: Number, required: true },
  },
  employeeBenefits: {
    medicalAndHealthInsurance: { type: Number, required: true },
    travelAndAccommodationCosts: { type: Number, required: true },
  },
  foreignTransactions: {
    incomeFromExport: { type: Number, required: true },
    foreignTaxPaidTaxCreditClaimed: { type: Number, required: true },
  },
});

const UserOrganizationDetail = mongoose.model('UserOragnizationDetail', taxDeductionSchema);

module.exports = UserOrganizationDetail;
