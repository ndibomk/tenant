import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApartmentA = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/projects/single')
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
              <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.waterFee}</p> 
              <p>{items.aptType==='1bedroom' ? items.plotA-items.amount: null}</p>
              <p>{items.aptType==='2bedroom' ? items.plotA-items.amount: null}</p>
              
              </div>
      )
    })}
    </div>
  )
}

export default ApartmentA