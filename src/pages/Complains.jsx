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
     
     <div className='rent-pages'>
   <p className="header">Complains</p>
  
   <div className="rent-card">
        {user?.result?.apartment==='a' ?<Link className='apartment'  to='/complaina'>
          Apartment A</Link>:null}
          </div>
          <div className="rent-cards">
      
      {user?.result?.apartment==='b' ?<Link className='apartment'  to='/complainb'>
          Apartment B</Link>: null}
     </div>
          <div className="rent-cards">
      {user?.result?.apartment==='c' ?<Link className='apartment'  to='/complainc'>
          Apartment C</Link>:null}
                </div>
</div>
    
 </> 
  )
}

export default Complains