
import React, { useEffect } from "react";
import {MDBBtn, MDBCol,MDBIcon, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation, useParams } from "react-router-dom";
import { getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import Projects from "../components/Projects";
import Login from "./Login";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import StudentsProjects from "./StudentsProjects";
import Admin from "./Admin";
import Caretaker from "./Caretaker";
import Teanant from "./Teanant";
import { deleteTour } from "../redux/features/projectSlice";
import { useState } from "react";
import axios from "axios";
import Edit from "./Edit";



const Main = () => {
  const [tenants,setTenants]= useState({})
  const [clear,setClear]= useState([])
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
  // const { Tours} = useSelector((state) => ({ ...state.tour }));
  const {user}=useSelector((state)=>({...state.auth}))
  const {projects,loading}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id
console.log(userId);
useEffect(() => {
if(userId){
 dispatch(getProjectsByUser(userId)) 
}

}, [userId])
useEffect(()=>{
  async function fetchData(){
  try {
    const res= await axios.get(`http://localhost:5000/project/userProjects/${userId}`)
    
    console.log( 'hello',res.data);
  setClear(  res.data)
  console.log('clear',setClear);
  
  } catch (error) {
    console.log(error);
    
  }
  }
  fetchData()
    },[])

// if(loading){
//    return (<div className="spinner"><Spinner/></div>)
   
// }
const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this tour ?")) {
    dispatch(deleteTour({ id, toast }));
  }
  console.log( 'delet',handleDelete);
};

 
// if(user?.result?.isAdmin){
//     return(
//         <div style={{marginTop:'10rem'}}>
//             <Admin/>
//         </div>
//     )
// }
// if(user?.result?.caretaker){
//     return(
//         <div style={{marginTop:'10rem'}}>
//             <Caretaker/>
//         </div>
//     )
// }else{
    return (
    <>
    <div className="tenant-dashboard">
    <div className="right" >
      <h5>Hello {user?.result?.name} this is your progress</h5>
      <div className="usersdetails">
    {projects && projects.map((item)=>{
        return(
            <>
            <div >
                <StudentsProjects {...item}/>
                <Edit ID={id}/>
            </div>
            <button className="btn"onClick={() => handleDelete(item._id)}
>
          delete
            </button>
            
                          
              <Link to={`/editTour/${item._id}`}>
              <MDBIcon
                fas
                icon="edit"
                style={{ color: "#55acee", marginLeft: "10px" }}
                size="lg"
              />      
              </Link>     
            <div
            
          >
            
            
            {/* <MDBBtn className="mt-1" tag="a" color="none">
              <MDBIcon
                fas
                icon="trash"
                style={{ color: "#dd4b39" }}
                size="lg"
                onClick={() => handleDelete(item._id)}
              /> */}
            {/* </MDBBtn>
            */}
            {/* </Link> */}
          </div>
          </>
        )
            
        
    })}
    </div>
    {/* <div className="left">
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
    </div>
    {/* <button onClick={()=>setClear([])} className="btn">
              clear
            </button> */}
    </> 
       )
}









// }


export default Main