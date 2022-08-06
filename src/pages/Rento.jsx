import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { setHeaders, url } from '../api'
import SingleProject from './SingleProject'
const Rento = () => {
    const [index,setIndex]=useState(0)

    const [users,setUsers]=useState([]);
const [rent,setRent]=useState([index]);
const [percentage,setUsersPercentage]=useState(0)
const [rentpercentage,setRentPercentage]=useState(0)
function compare(a,b){
  if(a._id <b._id){
    return 1
  }
  if(a._id >b._id){
    return -1
  }return 0
}
    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/rent', setHeaders())
          res.data.sort(compare)
          console.log(res.data[0]._id);
          
          setRent(res.data)
          setRentPercentage(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
        //   console.log('hello',res.data[0]._id+res.data[1]._id);
          
          console.log(res.data[0]._id);
         } catch (error) {
          console.log(error);
    
    
          
        }
        }
        fetchData()
          },[])
   
  return (
   <div><SingleProject/></div>
    // <h3>{total}</h3>
    // <h3>hhhh</h3>
  )
}

export default Rento