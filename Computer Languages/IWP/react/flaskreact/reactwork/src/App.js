import React from 'react'
import { useEffect , useState } from 'react'
import SignUpPage from './Components/SignUpPage';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ErrorMessage from './Components/Error/ErrorMessage';
import { useContext } from 'react';
import AuthContext from './context/Auth.context';
import Test from './Components/Test';
import { AuthContextCheckState, CookieCheck } from './context/Auth.state';
import Info from './Components/forms/subforms/UserDetail.Info';
import AssetAndInventory from './Components/forms/subforms/UserDetail.AssetAndInventory';
import Deduction from './Components/forms/subforms/UserDetail.Deduction';
import EmployeeAndBenefir from './Components/forms/subforms/UserDetail.EmployeementAndBenefit';
import Expensess from './Components/forms/subforms/UserDetail.Expenes';
import ForiegnTransection from './Components/forms/subforms/UserDetail.foriegnTransactionForm';
import GeneralInformation from './Components/forms/subforms/UserDetail.GeneralInformationForm';
import InconeAndRevanue from './Components/forms/subforms/UserDetail.IncomeAndRevunueForm';
import InvestAndSaving from './Components/forms/subforms/UserDetail.InvestAndSaving';
import ResearchAndDevelopment from './Components/forms/subforms/UserDetail.ResearchAndDev';
import DashBoard from './Components/DashBoard/DashBoard';
// import AuthContextCheckState from './context/Auth.state';
function App() {
  // const [data, setdata] = useState([{}])
  // const [data1, setdata1] = useState()
  // useEffect(()=>{
  //   const fetchdata = async () => {
  //     let data = await fetch("/members")
  //     let response = await data.json()
  //     console.log(response.members)
  //   }
  //   fetchdata();
  // })
  // useEffect(()=>{
  //   const fetchdata1 = async () => {
  //     let data = await fetch("/fetch" ,{
  //       method : "POST"
  //     })
  //     let res = await data.json()
  //     console.log(res)
  //   }
  //   fetchdata1()
  // })
  // useEffect(()=>{
  //   const fetchdata1 = async () => {
  //     let data = await fetch("/api/fetch")
  //     let res = await data.json()
  //     console.log(res)
  //   }
  //   fetchdata1()
  // })
  // useEffect(()=>{
  //   const fetchdata1 = async () => {
  //     let data = await fetch("http://localhost:7000/api/auth/fetchdesp",{
  //       method : "POST",
  //     })
  //     let res = await data.json()
  //     console.log(res)
  //   }
  //   fetchdata1()
  // })
  // const Authcontext = useContext(AuthContext);
  // const {CookieCheck,value} = AuthContext;
  return (
    <AuthContextCheckState>
    <Router>
    <Navbar></Navbar>
      <CookieCheck/>
      <Routes>
      <Route exact path='/' element = {<SignUpPage/>}></Route>
      <Route exact path='/test' element = {<Test/>}></Route>
      <Route exact path='/userDetail' element={<Info/>}>
            <Route path="genInformation" element={<GeneralInformation />} />
            <Route path="revenue" element={<InconeAndRevanue />} />
            <Route path="expensess" element={<Expensess />} />
            <Route path="invest-saving" element={<InvestAndSaving />} />
            <Route path="deduction" element={<Deduction />} />
            <Route path="invetory-assets" element={<AssetAndInventory />} />
            <Route path="research-dev" element={<ResearchAndDevelopment />} />
            <Route path="employee-benifit" element={<EmployeeAndBenefir />} />
            <Route path="foreign-transaction" element={<ForiegnTransection />} />
          </Route>
        <Route exact path='/dashboard' element = {<DashBoard/>}></Route>
      </Routes>
    </Router>
    </AuthContextCheckState>
  )
}

export default App