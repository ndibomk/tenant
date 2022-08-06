import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation } from "react-router-dom";
import { createProject, getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import {StyledForm} from './StyledForm'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createMilestone } from "../redux/features/mileSlice";
// import {AiOutlineArrowRight} from 'react-icons/ai'



const Milestone = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.project}))

  const {projects}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id

const [date,setDate]=useState('')
const [mile,setMilestone]=useState({
    name:'',
    apartment:'',
    item:'',
    quantity:'',
    price:'',
    shopName:'',
    servedBy:'',
    phoneNo:'',

    createdAt:Date

})
useEffect(()=>{
  dispatch(getProjectsByUser(userId))
},[userId])
const handleSubmit= (e)=>{
    e.preventDefault()
    if (mile){
        const updateddata={...mile, name:user?.result.name}
       
       dispatch(createMilestone(updateddata))
    }
}

  return (
   
      <StyledForm style={{marginTop:'8rem'}} onSubmit={handleSubmit}>
    <h3> Caretaker Roles </h3>
    <div className="main-rent-create">
    <div className="rent-split-start">
      <input className='form-input' type='text'  placeholder='Your Name' onChange={(e)=> setMilestone({...mile , name:e.target.value})} required/>
      <input className='form-input' type='text'  placeholder='Apartment eg A or B or C' onChange={(e)=> setMilestone({...mile , apartment:e.target.value})} required/>
      <input className='form-input' type='text'  placeholder='Name of the Item' onChange={(e)=> setMilestone({...mile , item:e.target.value})} required/>
       <input className='form-input' type='number'  placeholder='Price' onChange={(e)=> setMilestone({...mile , price:e.target.value})} required/>
       </div>
       <div className="rent-split">
       <input className='form-input' type='number'  placeholder='Quantity' onChange={(e)=> setMilestone({...mile , quantity:e.target.value})} required/>
      <input className='form-input' type='text'  placeholder='Shop Name' onChange={(e)=> setMilestone({...mile , shopName:e.target.value})} required/>
      <input className='form-input' type='number'  placeholder='Phone Number of the Seller' onChange={(e)=> setMilestone({...mile , phoneNo:e.target.value})} required/>
      <input className='form-input' type='text'  placeholder='Name of The Seller' onChange={(e)=> setMilestone({...mile , servedBy:e.target.value})} required/> 
       <input className='form-input' type='Date'  placeholder='Project Title' onChange={(e)=> setMilestone({...mile , createdAt:e.target.value})} required/>
      
      </div>
</div>
      <button className='btn'>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
    <div className="icon">
      view
        <Link to='/mileProject'>
          go
           {/* <AiOutlineArrowRight/> */}
        </Link>
        </ div>
      </StyledForm>
      
 
    
  )
}


export default Milestone