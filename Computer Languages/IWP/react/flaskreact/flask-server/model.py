import google.generativeai as generative_ai
# from reportlab.pdfgen import canvas
from fpdf import FPDF
import ast

API_KEY = 'AIzaSyCCiKT6_gfxzXNEiYO3VeE_sY15h3pSf9Y'
tax_sections = [
    "Section 32 (Depreciation on Assets)",
    "Section 35 (Scientific Research Expenditure)",
    "Section 36(1)(iii) (Interest on Borrowed Capital)",
    "Section 37 (Rent expense)",
    "Section 80C (Deductions on Investments)",
    "Section 80D (Medical Insurance Premiums)",
    "Section 80G (Charitable Donations)",
    "Section 10AA (Deductions for Special Economic Zones)",
    "Section 44AD (Presumptive Taxation for Small Businesses)",
    "Section 80JJAA (Employment Generation Deduction)",
    "Section 43B (Certain Deductions Allowed on Payment Basis)",
    "Section 80IA (Deductions for Infrastructure Projects)",
    "Section 80IB (Deductions for Certain Industrial Undertakings)",
    "Section 80P (Deductions for Cooperative Societies)",
    "Section 115BA (Reduced Tax Rate for Domestic Companies)",
    "Section 80IBA (Affordable Housing Projects)",
    "Section 80IC (Deductions for Certain States)",
    "Section 80TTA (Interest on Savings Accounts)",
    "Section 80U (Deductions for Disabled Individuals)",
    "Section 80GG (Rent Deduction for Self-employed Individuals)",
    "Section 80RRB (Royalty Income Deduction)",
    "Section 24(b) (Interest on Home Loan)",
    "Section 80E (Interest on Education Loans)",
    "Section 80CCG (Rajiv Gandhi Equity Savings Scheme)",
    "Section 80DDB (Medical Expenses for Disabled Individuals)",
    "Section 80GGA (Scientific Research Donations)",
    "Section 80JJA (Deduction for Profits from New Manufacturing Units)"
]

financial_data = {
    "General Information": {
        "Organization Name": "Beta Tech Solutions Ltd.",
        "Registration Number": "AABCT1234D",
        "Business Type": "Private Limited Company (Pvt. Ltd.)",
        "Incorporation Year": 2018,
        "Annual Turnover (INR)": 90000000
    },
    "Income and Revenue": {
        "Total Revenue (INR)": 90000000,
        "Income Sources": {
            "Domestic Revenue (INR)": 50000000,
            "Foreign Revenue (INR)": 25000000,
            "Interest Income (INR)": 2000000,
            "Dividend Income (INR)": 700000,
            "Capital Gains (INR)": 3000000
        }
    },
    "Expenses": {
        "Total Salaries and Wages (INR)": 20000000,
        "Rent and Lease Expenses (INR)": 6000000,
        "Utility Expenses (INR)": 1500000,
        "Depreciation of Fixed Assets (INR)": 4000000
    },
    "Investments and Savings": {
        "Infrastructure Investments (INR)": 8000000,
        "Employee Savings Schemes (INR)": 3000000,
        "Insurance Premiums (INR)": 1000000
    },
    "Deductions": {
        "Charitable Donations (INR)": 2000000,
        "Pension Contributions (INR)": 4000000,
        "Medical Insurance (INR)": 800000,
        "Education Loan Interest (INR)": 500000,
        "R&D Expenses (INR)": 3500000
    },
    "Assets and Inventory": {
        "Current Assets Value (INR)": 12000000,
        "Inventory Value (INR)": 10000000
    },
    "Research and Development": {
        "R&D Expenses (INR)": 3500000,
        "Eligible R&D Tax Credits (INR)": 2500000
    },
    "Employee Benefits": {
        "Health Insurance for Employees (INR)": 700000,
        "Travel and Accommodation Costs (INR)": 500000
    },
    "Foreign Transactions": {
        "Export Income (INR)": 20000000,
        "Foreign Taxes Paid (INR)": 1000000
    }
}


def ai(query):
    generative_ai.configure(api_key=API_KEY)
    model = generative_ai.GenerativeModel('gemini-pro')
    response = model.generate_content(query)
    cleaned_response = response.text.replace('*', '').replace('#', '')
    return cleaned_response

query = f"""
Analyze the provided financial data of the organization and calculate tax deductions by cross-referencing each entry with the corresponding tax sections from the list below. For each tax section:

Identify the applicable tax section based on the financial data and section list check every section provided in the section list.
Perform detailed calculations for each deduction according to the specific percentage set by the government under the corresponding tax act or section.
Cross-check for any overlapping or conflicting sections to ensure that no deduction is applied twice.
Provide clear calculations with the formula used, and break down the deductions for transparency.
Sum all the applicable deductions very carefully and finally calculate the grand total taxable income after applying these deductions(compulsory).

Financial Data:
{financial_data}

Relevant Tax Sections:
{tax_sections}
Output Format:

For each tax section, provide the following structure:

*Section Name*: [The applicable section name or category from financial data, e.g., Charitable Contributions]
Relevant Tax Act/Section: [The tax section under which the deduction is claimed, e.g., Section 80G]
Calculation: [Show the detailed formula and calculation for the deduction, including the percentage applied as per the section]
Deduction Amount: [The calculated deduction amount based on the financial data and the government-specified percentage]
Explanation: [Briefly explain why this deduction applies]
"""

def create_pdf_with_table(content, table_data, filename='Tax_Deduction_Report_FPDF.pdf'):
    class PDF(FPDF):
        def header(self):
            self.set_font('Arial', 'B', 24)
            self.cell(0, 10, 'Tax Deduction Report', ln=True, align='C')
            self.ln(10)

        def chapter_title(self, title):
            self.set_font('Arial', 'B', 14)
            self.cell(0, 10, title, ln=True, align='L')
            self.ln(5)

        def chapter_body(self, body):
            self.set_font('Arial', '', 14)
            self.multi_cell(0, 10, body)
            self.ln()

        def add_table(self, data):
            column_widths = [50, 50, 50, 50]
            self.set_font('Arial', 'B', 10)
            headers = data[0]
            for i, header in enumerate(headers):
                self.cell(column_widths[i], 12, header, border=1, align='C')
            self.ln()
            self.set_font('Arial', '', 9)
            for row in data[1:]:
                for i, item in enumerate(row):
                    self.cell(column_widths[i], 12, str(item), border=1, align='C')
                self.ln()

    pdf = PDF()
    pdf.add_page()
    pdf.chapter_title('Deduction')
    pdf.chapter_body(content)
    pdf.chapter_title('Deduction Breakdown Table')
    pdf.add_table(table_data)
    pdf.output(filename)

ans = ai(query)
print(ans)
table_representation = f"""i am very angry strict instruction all content must be string first row should be ["Section Name", "Tax Act/Section Number", "Calculation", "Deduction Amount"] additionally a all content must be string string and all content must not be more than 2 words; if content not provided then write "N/A" [
    ["Section Name", "Relevant Tax Act/Section", "Percentage", "Deduction Amount"],
    ["Charitable Donations", "80G", "100% = 5M", "INR 5M"],
    ["Interest Loans", "36(1)(iii)", "100% = 12M", "INR 12M"],
    ["Grand Total", "N/A", "N/A", "amount"]
]
Given the following block of text related to tax deductions, extract the relevant information, then calculate the total tax to be paid and present it in a structured table format. Ensure that each piece of data is succinctly summarized while maintaining clarity. Here is the text block: {ans}"""

table_representation_result = ai(table_representation)
print(table_representation_result)

table_data = ast.literal_eval(table_representation_result)



create_pdf_with_table(ans, table_data)