import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Complains = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [admin,setAdmin]=useState([]);
    const [caretaker,setCareTaker]=useState([])
        useEffect(()=>{
            async function fetchData(){
            try {
              const res= await axios.get('http://localhost:5000/complain')
              setUsers(  res.data)
             } catch (error) {
              console.log(error);
              
            }
            }
            fetchData()
              },[])
  return (
    <>
     
     <div className='rent-page'>
   <p className="header">Complains</p>
  
        
        {user?.result?.apartment==='a' ?<Link to='/complaina'>
          Apartment A</Link>:null}
      
      
      {user?.result?.apartment==='b' ?<Link to='/complainb'>
          Apartment B</Link>: null}
     
   
      {user?.result?.apartment==='c' ?<Link to='/complainc'>
          Apartment C</Link>:null}
                
</div>
    
 </> 
  )
}

export default Complains