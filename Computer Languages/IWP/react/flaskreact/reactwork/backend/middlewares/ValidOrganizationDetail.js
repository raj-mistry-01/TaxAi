const { validationResult, body } = require('express-validator');

const ValidOrganizationDetail = [
    body('userId')
        .isMongoId().withMessage('Invalid user ID'),

    body('generalInformation.organizationName')
        .notEmpty().withMessage('Organization name is required'),

    body('generalInformation.registrationNumber')
        .notEmpty().withMessage('Registration number is required'),

    body('generalInformation.typeOfBusiness')
        .notEmpty().withMessage('Type of business is required'),

    body('generalInformation.yearOfIncorporation')
        .isNumeric().withMessage('Year of incorporation must be a number')
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage('Year of incorporation must be between 1900 and the current year'),

    body('generalInformation.annualTurnover')
        .isNumeric().withMessage('Annual turnover must be a number')
        .isFloat({ min: 0 }).withMessage('Annual turnover must be a non-negative number'),

    body('incomeAndRevenue.grossRevenue')
        .isNumeric().withMessage('Gross revenue must be a number')
        .isFloat({ min: 0 }).withMessage('Gross revenue must be a non-negative number'),

    body('incomeAndRevenue.incomeSources.domestic')
        .isNumeric().withMessage('Domestic income must be a number')
        .isFloat({ min: 0 }).withMessage('Domestic income must be a non-negative number'),

    body('incomeAndRevenue.incomeSources.foreign')
        .isNumeric().withMessage('Foreign income must be a number')
        .isFloat({ min: 0 }).withMessage('Foreign income must be a non-negative number'),

    body('incomeAndRevenue.incomeSources.interestIncome')
        .isNumeric().withMessage('Interest income must be a number')
        .isFloat({ min: 0 }).withMessage('Interest income must be a non-negative number'),

    body('incomeAndRevenue.incomeSources.dividendIncome')
        .isNumeric().withMessage('Dividend income must be a number')
        .isFloat({ min: 0 }).withMessage('Dividend income must be a non-negative number'),

    body('incomeAndRevenue.incomeSources.capitalGains')
        .isNumeric().withMessage('Capital gains must be a number')
        .isFloat({ min: 0 }).withMessage('Capital gains must be a non-negative number'),

    body('expenses.salariesAndWages')
        .isNumeric().withMessage('Salaries and wages must be a number')
        .isFloat({ min: 0 }).withMessage('Salaries and wages must be a non-negative number'),

    body('expenses.rentLeaseExpenses')
        .isNumeric().withMessage('Rent/lease expenses must be a number')
        .isFloat({ min: 0 }).withMessage('Rent/lease expenses must be a non-negative number'),

    body('expenses.utilities')
        .isNumeric().withMessage('Utilities must be a number')
        .isFloat({ min: 0 }).withMessage('Utilities must be a non-negative number'),

    body('expenses.depreciationOfFixedAssets')
        .isNumeric().withMessage('Depreciation of fixed assets must be a number')
        .isFloat({ min: 0 }).withMessage('Depreciation of fixed assets must be a non-negative number'),

    body('investmentsAndSavings.investmentsInInfrastructure')
        .isNumeric().withMessage('Investments in infrastructure must be a number')
        .isFloat({ min: 0 }).withMessage('Investments in infrastructure must be a non-negative number'),

    body('investmentsAndSavings.savingsSchemesForEmployees')
        .isNumeric().withMessage('Savings schemes for employees must be a number')
        .isFloat({ min: 0 }).withMessage('Savings schemes for employees must be a non-negative number'),

    body('investmentsAndSavings.insurancePremiumsPaid')
        .isNumeric().withMessage('Insurance premiums paid must be a number')
        .isFloat({ min: 0 }).withMessage('Insurance premiums paid must be a non-negative number'),

    body('deductions.charitableDonations')
        .isNumeric().withMessage('Charitable donations must be a number')
        .isFloat({ min: 0 }).withMessage('Charitable donations must be a non-negative number'),

    body('deductions.interestOnBusinessLoans')
        .isNumeric().withMessage('Interest on business loans must be a number')
        .isFloat({ min: 0 }).withMessage('Interest on business loans must be a non-negative number'),

    body('deductions.contributionToPensionFunds')
        .isNumeric().withMessage('Contribution to pension funds must be a number')
        .isFloat({ min: 0 }).withMessage('Contribution to pension funds must be a non-negative number'),

    body('assetAndInventory.valueOfCurrentAssets')
        .isNumeric().withMessage('Value of current assets must be a number')
        .isFloat({ min: 0 }).withMessage('Value of current assets must be a non-negative number'),

    body('assetAndInventory.inventoryAndGoodsInStock')
        .isNumeric().withMessage('Inventory and goods in stock must be a number')
        .isFloat({ min: 0 }).withMessage('Inventory and goods in stock must be a non-negative number'),

    body('researchAndDevelopment.rdExpenses')
        .isNumeric().withMessage('R&D expenses must be a number')
        .isFloat({ min: 0 }).withMessage('R&D expenses must be a non-negative number'),

    body('researchAndDevelopment.eligibleRdTaxCredits')
        .isNumeric().withMessage('Eligible R&D tax credits must be a number')
        .isFloat({ min: 0 }).withMessage('Eligible R&D tax credits must be a non-negative number'),

    body('employeeBenefits.medicalAndHealthInsurance')
        .isNumeric().withMessage('Medical and health insurance must be a number')
        .isFloat({ min: 0 }).withMessage('Medical and health insurance must be a non-negative number'),

    body('employeeBenefits.travelAndAccommodationCosts')
        .isNumeric().withMessage('Travel and accommodation costs must be a number')
        .isFloat({ min: 0 }).withMessage('Travel and accommodation costs must be a non-negative number'),

    body('foreignTransactions.incomeFromExport')
        .isNumeric().withMessage('Income from export must be a number')
        .isFloat({ min: 0 }).withMessage('Income from export must be a non-negative number'),

    body('foreignTransactions.foreignTaxPaidTaxCreditClaimed')
        .isNumeric().withMessage('Foreign tax paid tax credit claimed must be a number')
        .isFloat({ min: 0 }).withMessage('Foreign tax paid tax credit claimed must be a non-negative number'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body.userId);

        next();
    }
];

module.exports = ValidOrganizationDetail;
