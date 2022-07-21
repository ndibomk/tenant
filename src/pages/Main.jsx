
import React, { useEffect, useState } from "react";
import {MDBBtn, MDBCol,MDBIcon, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation } from "react-router-dom";
import { getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import Projects from "../components/Projects";
import Login from "./Login";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import StudentsProjects from "./StudentsProjects";
import Admin from "./Admin";
import Caretaker from "./Caretaker";
import Teanant from "./Teanant";
import { deleteTour } from "../redux/features/api";
import TenantMainPage from "./TenantMainPage";
import CaretakeMainPage from "./CaretakeMainPage";
import axios from "axios";



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
            <Admin/>
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
    <div style={{marginTop:'7rem'}}>
    <h5 className="header"> Hello {user?.result?.name} this your page</h5>
    <div className="line"></div>
    <div  className="main">
      
    <div className="right" >
      <TenantMainPage/>
    
         
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