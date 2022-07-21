import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import ApartmentA from './ApartmentA';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select'
const Rent = () => {
    const {user}=useSelector((state)=>({...state.auth}))
    const userId =user?.result?._id
    const [users,setUsers]=useState([]);
    const [A,setA]=useState(false);
    const [admin,setAdmin]=useState([]);
    const [caretaker,setCareTaker]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
      async function fetchData(){
      try {
        const res= await axios.get('http://localhost:5000/project')
        setUsers(  res.data)
       } catch (error) {
        console.log(error);
        
      }
      }
      fetchData()
        },[])
        useEffect(()=>{
          async function fetchData(){
          try {
            const res= await axios.get('http://localhost:5000/milestone')
            setAdmin(  res.data)
            console.log();
           } catch (error) {
            console.log(error);
            
          }
          }
          fetchData()
            },[])
              useEffect(()=>{
                async function fetchData(){
                try {
                  const res= await axios.get('http://localhost:5000/milestone')
                  
                  console.log( 'hello',res.data);
                setCareTaker( res.data)
                console.log('p', caretaker);
                
                } catch (error) {
                  console.log(error);
                  
                }
                }
                fetchData()
                  },[])
                  const open =()=>{
                    if(A){
navigate('/')
                    }
                  }
              
  return (
    <div className='rent-single-page' style={{marginTop:'8rem'}}>
    <p className="header">Rents</p>
   
    <div className='rent-page'>
      <div>     
         Hello  caretaker click here to view your tenats rents {user?.result?.name}
</div>
<div> 
  {user?.result?.apartment==='a' ?<Link className='apartment' to='/apartmentA'>View Rents Progress</Link> :null }
   
      {user?.result?.apartment==='b' ?<Link to='/apartmentB'>Apartment b</Link> : null }
      {user?.result?.apartment==='c' ? <Link to='/apartmentC'>Apartment c</Link> : null }
   </div>
     
     {/* {caretaker.data?.map((i)=>{
      return(
        <div>
       
      {users.data?.map((items)=>{
  
        if(items.apartment===i.apartment  ){
          return(
          
            <div className='rent-card'>
                     { items.apartment===i.apartment ? 'hello':'null'}

              <p>Name: {items.name}</p>
              <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              <p>WaterFee: {items.waterFee}</p> 
              <p>balance: 00</p>
              z
              </div>
            
        )
        }
        
      })}   </div>
      )
     })} */}
    </div>
    
 </div> )
}

export default Rent