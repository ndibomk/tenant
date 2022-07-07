
import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation } from "react-router-dom";
import { getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import Projects from "../components/Projects";
import Login from "./Login";

import { useNavigate } from "react-router-dom";
import StudentsProjects from "./StudentsProjects";
import Admin from "./Admin";
import Caretaker from "./Caretaker";
import Teanant from "./Teanant";



const Main = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {projects}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id
console.log(userId);
useEffect(() => {

dispatch(getProjectsByUser(userId))
}, [userId])
 
if(user?.result?.isAdmin){
    return(
        <div style={{marginTop:'10rem'}}>
            <Admin/>
        </div>
    )
}
if(user?.result?.caretaker){
    return(
        <div style={{marginTop:'10rem'}}>
            <Caretaker/>
        </div>
    )
}else{
    return (
    <>
    <div className="main">
    <div className="right" style={{margin:'10rem'}}>
    {projects && projects.map((item)=>{
        return(
            <div>
                <StudentsProjects {...item}/>
            </div>
        )
            
        
    })}
    </div>
    <div className="left">
        <Link to='/addProject'>
           <button className="btn">Add a Project</button> 
        </Link>
        
        <button className="btns">Not allocated yet ...</button>
        <p>
        Do you need help?<br></br> Email the system coordinator on admin@gmail.com<br></br>

Are you a CareTaker but logged in with <br></br> a Tenants level account? <br></br> Send a supervision request to admin@sppms.com. <br></br> In the request, attach your national ID and your staff ID.<br></br> Note that the system admin may schedule a <br></br>zoom meeting with you to <br></br> confirm your identity.
        </p>
    </div>
   {/* {user?.result?.isAdmin?'hello' :'not admin'} */}
    </div>
    </>
       )
}









}


export default Main