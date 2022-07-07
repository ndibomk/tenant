import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMiles, getMilestone, getMilestoneByUser } from '../redux/features/mileSlice';
import axios from 'axios'
import CaretakerPogress from './CaretakerPogress';
const MileProjects = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.milestone}))

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/milestone')
      
     
    setUsers(  res.data)
    
    
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])
  return (
   <div style={{marginTop:'10rem'}}>
    {users.data?.map((items)=>{
      return(
        <div>
          {items.milestone}
        </div>
      )
    })}


    <CaretakerPogress/>
   </div>
  )
}

export default MileProjects