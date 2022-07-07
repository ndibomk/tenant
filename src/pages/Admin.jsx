import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

const Admin = () => {
  const {user}=useSelector((state)=>({...state.auth}))
  const userId =user?.result?._id
  const [users,setUsers]=useState([]);
  const [admin,setAdmin]=useState([]);
  const [caretaker,setCareTaker]=useState([])
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats')
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
          const res= await axios.get('http://localhost:5000/stats/projects')
          setAdmin(  res.data)
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

          useEffect(()=>{
            async function fetchData(){
            try {
              const res= await axios.get('http://localhost:5000/stats/caretaker')
              setCareTaker(  res.data)
             } catch (error) {
              console.log(error);
              
            }
            }
            fetchData()
              },[])
      
        return (
          <>
          <div style={{marginTop:'10rem'}}>
          {users.map((items)=>{
            return(
              <div>
                {items.name}   <span>          {          items.email}</span>
                
              </div>
            )
          })}
          </div>
<div style={{marginTop:'10rem'}}>
          {caretaker.map((items)=>{
            return(
              <div>
                {items.milestone}   <span></span>
                
              </div>
            )
          })}
          </div>
          <div style={{marginTop:'10rem'}}>
          {admin.map((items)=>{
            return(
              <div>
                {items.projectTitle}   <span></span>
                
              </div>
            )
          })}
          </div>
          
          </>
        )
      
 
}

export default Admin