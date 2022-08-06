import styled  from 'styled-components'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { setHeaders, url } from '../api'


const Charts = () => {
    const [rent,setRent]=useState([]);

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
    
          const res= await axios.get('http://localhost:5000/stats/charts', setHeaders())
          res.data.sort(compare)
          const data=res.data.map((item)=>{
           const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
           ]
           return{
            months:[item._id-1],
            amount:item.total
           }
          })
          
        setRent(data)
         
         } catch (error) {
          console.log(error);
    
    
          
        }
        }
        fetchData()
          },[])  
const data = [
    {
      amount: rent.amount,
      
      month: rent.months,
      
    },
    {
      amount: 'Page B',
      
      month: "tuesday",
      
    },
   
    
    {
      amount: 'Page F',
      
      month: 3800,
      
    },
    {
      amount: 'Page G',
    
      month: 4300,
      
    },
  ];
  return (
    <StyledChart>
        <h4>Last Month Rent</h4>
         <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={rent}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="month" stroke="#342ccc" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </StyledChart>
  )
}

export default Charts
const StyledChart= styled.div`
    width: 100%;
    height:300px;
    margin-top:3rem;
    padding:1rem;
    border:2px solid black;
    border-radius:1.2rem;
    h3{
        margin-bottom:1rem;
    }

`
const Loader=styled.p`
    margin-top: 2rem;
`