
import React, { useEffect, useState } from "react";
import {MDBBtn, MDBCol,MDBIcon, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import Projects from "../components/Projects";
import Login from "./Login";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import StudentsProjects from "./StudentsProjects";
import Admin from "./Admin";
import Caretaker from "./Caretaker";
import TestRent from "./TestRent";

import styled from "styled-components";

import { deleteTour } from "../redux/features/api";
import TenantMainPage from "./TenantMainPage";
import CaretakeMainPage from "./CaretakeMainPage";
import axios from "axios";
import AdminSidebar from './AdminSidebar'


const Main = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const { Tours} = useSelector((state) => ({ ...state.tour }));
  const {user}=useSelector((state)=>({...state.auth}))
  const {projects,loading}=useSelector((state)=>({...state.project}))
  const [caretaker,setCareTaker]=useState([])
  console.log(caretaker);
const userId =user?.result?._id
console.log( projects);
console.log(userId);
useEffect(() => {

dispatch(getProjectsByUser(userId))
}, [userId])

// if(loading){
//    return (<div className="spinner"><Spinner/></div>)
   
// }
useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get('http://localhost:5000/project')
    setCareTaker(  res.data)
   } catch (error) {
    console.log(error);
    
  }
  }
  fetchData()
    },[])


const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this tour ?")) {
    dispatch(deleteTour({ id,toast }));
  }
};
 
if(user?.result?.isAdmin){
    return(
        <div style={{marginTop:'10rem'}}>
            <StyledDashboard>
      <SideNav className="sidenav">
        <Link to='/'>
          <h3 style={{color:'whitesmoke'}}>Quick Links</h3>
        </Link>
        
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="summary"
        >
          Complains
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/main/admintotalrent"
        >
          Rents
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/main/admincaretaker"
        >
        Maintanance
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/main/admintotalrent"
        >
          Vacations
        </NavLink>
      </SideNav>
      <Content>
        <Outlet />
      </Content>
    </StyledDashboard>
        </div>
    )
}
if(user?.result?.caretaker ){
    return(
        <div style={{marginTop:'10rem'}}>
            {/* <Caretaker/> */}
            <CaretakeMainPage/>
        </div>
    )
}else{
    return (
    <div >
    <h5 className="header" > Hello {user?.result?.name} this your page</h5>
    <div className="line"></div>
    <div  className="main">
      
    <div className="right" >
      <TenantMainPage/>
      {/* <TestRent/> */}
    
         
    </div>
    <div className="left">
        {/* <Link to='/addProject'>
           <button className="btn">Add a Project</button> 
        </Link> */}
        
        {/* <button className="btns">Not allocated yet ...</button> */}
        <p>
        Do you need help?<br></br> Email the system coordinator on admin@gmail.com<br></br>

Are you a CareTaker but logged in with <br></br> a Tenants level account? <br></br> Send a supervision request to admin@sppms.com. <br></br> In the request, attach your national ID and your staff ID.<br></br> Note that the system admin may schedule a <br></br>zoom meeting with you to <br></br> confirm your identity.
        </p>
    </div>
   {/* {user?.result?.isAdmin?'hello' :'not admin'} */}
    </div>
    </div>
       )
}









}


export default Main
const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap:wrap;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color:bisque;
  background-color: #806a78;

  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
    color:black;
    font-size:1.3rem;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;