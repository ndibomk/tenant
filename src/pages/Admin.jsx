import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import {BsPeopleFill} from 'react-icons/bs'

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
          <div  style={{marginTop:'10rem'}} className="admin">
          {/* https://images.pexels.com/photos/3637083/pexels-photo-3637083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
          <h5> <BsPeopleFill/> {user?.result?.name}</h5>
          </div>
          
           <div style={{marginTop:'10rem'}}>
            <h2>Admin dashboard</h2>
          {users.map((items)=>{
            return(
              <>
              <div>
                {items.total-4}     
              </div>
               <div>
              3  
               
             </div>
              </>
              
            )
          })}
          </div> 
<div >
          {caretaker.map((items)=>{
            return(
              <div>
                {items.apartment}   
                {/* {items.amount} */}
              </div>
            )
          })}
          </div>
          <div style={{marginTop:'10rem'}}>
          {admin.map((items)=>{
            return(
              <div>
                {items._id * items.total }
                {items.length}
                
              </div>
            )
          })}
          </div>
           
          </>
        )
      
 
}

export default Admin