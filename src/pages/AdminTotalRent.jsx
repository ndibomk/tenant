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
      const res= await axios.get('http://localhost:5000/stats/vacations')
      setTours(  res.data)
      console.log('hey',tours);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])



      const handleSearch= async (event)=>{
        event.preventDefault()
        let key =event.target.value
        if(key){
         let result= await fetch(`http://localhost:5000/project/search${key}`)
      result=await result.json()
      if(result){
        setTours(result)
        
      } console.log(` `,result);
        }else{
          setTours()
        }
      
      
      }


  return (
    <div>
      <input type="text" className='search' placeholder='Search by house Number' onChange={handleSearch} />
                
         {tours && tours?.map((item)=>{
          return(
            <div className='dataform'>
            <div className='datas'>
              <p>Name: {item.name}</p>
             <p> Aparment: {item.apartment}</p> 
             <p> HouseNo: {item.houseNo}</p> 
             <p> Reason: {item.reason}</p> 
             <p> Notice Date: {item.remTime}</p> 
             <div className="buttons">
              <button className="btn">delete</button>
              <button className="btn">view</button>
              </div>
             </div>
            </div>
          )
         })}

    </div>
  )
}

export default AdminTotalRent