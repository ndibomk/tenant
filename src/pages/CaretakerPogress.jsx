import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMilestoneByUser } from '../redux/features/mileSlice'
import axios from 'axios'
import { getMilesByUser } from '../redux/api'

const CaretakerPogress = () => {
    const {user}=useSelector((state)=>({...state.auth}))

    const [users,setUsers]=useState([]);
    const userId =user?.result?._id
    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get(`http://localhost:5000/milestone/miles/${userId}`)
          
          console.log( 'hello',res.data);
        setUsers(  res.data)
        
        
        } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])





   
  return (
    <div>
     {users && users.map((item)=>{
        return(
            <div>
                {item.milestone}
            </div>
        )
     })}
    </div>
  )
}

export default CaretakerPogress