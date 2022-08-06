import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Vacations = () => {
  const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [admin,setAdmin]=useState([]);
    const [caretaker,setCareTaker]=useState([])
    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/vacation')
        setUsers(  res.data)
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
        
  return (

    
    <div className='rent-pages'>
   <p className="header" id='vacatetitle'>Vacations</p>
   
  
        <div className='rent-card'>
        {user?.result?.apartment==='a' ?
          <Link className='apartment'   to='/vacationa'>
          Apartment A</Link> : null}
      </div>  
      <div className='rent-cards'>
      {user?.result?.apartment==='b' ?<Link className='apartment'  to='/vacationb'>
          Apartment B</Link> : null}
      </div> 
      <div className='rent-cards'>
      {user?.result?.apartment==='c' ?<Link className='apartment'  to='/vacationc'>
          Apartment C</Link>: null}
      </div>    
</div>
  )
}

export default Vacations