import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";
import { getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import Projects from "../components/Projects";
import Login from "./Login";

import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {projects ,loading}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id
console.log(userId);
useEffect(() => {

dispatch(getProjectsByUser(userId))
}, [userId])

if(loading){
  return( 
  <div className="spinner">
      <div className="spinner"><Spinner className="spinner"/></div>

  </div>)
}
  // const {project}=useSelector((state)=>({...state.project}))
  // console.log(project);
  // const {user}=useSelector((state)=>({...state.auth}))

  // const dispatch= useDispatch()

  // useEffect(() => {
  //   dispatch(getProjects())
  
    
  // }, [])
  
// if (user?.result?.name===projects.name) {
return (
  <>
  <div className='home-main'>
    
   {user ? navigate('/main'):navigate('/login') }
</div>
   <div style={{margin:'10rem'}}>

   
    </div>
      
     </>
  )

    
    
};

export default Home;
