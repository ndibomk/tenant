import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const AdminTotalRent = () => {
      const [tours,setTours]=useState([])
// const {tours}=useSelector((state)=>state.project)
// console.log(tours);
useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/chartss')
      setTours(  res.data)
      console.log('hey',tours);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])

  return (
    <div>
         {tours && tours?.map((item)=>{
          return(
            <div className='datas'>
              <p>Name: {item.name}</p>
             <p> Aparment{item.apartment}</p> 
             <div className="buttons">
              <button className="btn">delete</button>
              <button className="btn">view</button>

             </div>
            </div>
          )
         })}

    </div>
  )
}

export default AdminTotalRent