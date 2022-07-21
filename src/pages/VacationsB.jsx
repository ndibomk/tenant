import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VacationsB = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/projects/vacationb')
          setAdmin(  res.data)
          console.log(admin);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (
    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>

              <p>Name: {items.name}</p>
              <p> RentPaid: {items.reason}</p>
              <p> RentPaid: {items.remTime}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.condition}</p> 
              <p>balance: 00</p>
              z
              </div>
      )
    })}
    </div>
  )
}

export default VacationsB