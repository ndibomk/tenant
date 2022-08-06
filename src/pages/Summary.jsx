import React, { useState } from 'react'
import styled from 'styled-components'
import {FaUsers,FaChartBar,FaClipboard,FaMoneyCheckAlt} from 'react-icons/fa'
import Widget from './Widget'
import { useEffect } from 'react'
import axios from 'axios'
import { setHeaders, url } from '../api'
import Rento from './Rento'
import { useSelector } from 'react-redux'
import Charts from './Charts'
// import WidgetSummury from './summuryComponents/WidgetSummury';
const Summary = () => {
  const {user}=useSelector((state)=>({...state.auth}))

const [users,setUsers]=useState([]);
const [rent,setRent]=useState([]);
const [renta,setRenta]=useState([]);
const [percentage,setUsersPercentage]=useState(0)
const [percentageB,setUsersPercentageB]=useState(0)
const [percentageC,setUsersPercentageC]=useState(0)

const [rentpercentage,setRentPercentage]=useState(0)
const [rentpercentagea,setRentPercentagea]=useState(0)

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

      const res= await axios.get('http://localhost:5000/stats/totalrenta', setHeaders())
      res.data.sort(compare)
      console.log(res.data);
      setRent(res.data);
      
      setRentPercentage(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
      setUsersPercentageB((((50*15000)-res.data[1].total*15000)/res.data[1].total*15000)*100)
     
      console.log(res.data[0]._id);
     } catch (error) {
      console.log(error);


      
    }
    }
    fetchData()
      },[])
      useEffect(()=>{
        async function fetchData(){
        try {
    
          const res= await axios.get('http://localhost:5000/stats/totalrentb', setHeaders())
          res.data.sort(compare)
          console.log(res.data);
          setRenta(res.data);
          
          setRentPercentagea(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
          
          console.log(res.data[0]._id);
         } catch (error) {
          console.log(error);
    
    
          
        }
        }
        fetchData()
          },[])
      useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats', setHeaders())
          res.data.sort(compare)
          
          setUsers(res.data);
         
          setUsersPercentage(((res.data[0].total-res.data[1].total)/res.data[1].total)*100)
          
         } catch (error) {
          console.log(error);
    
    
          
        }
        }
        fetchData()
          },[])
          
          
const data =[
  {
    icons:<FaUsers/>,
    digits:users[0]?.total-4,
    isMoney:false,
    title:'Tenants',
    color:"rgb(102,108,255)",
    bgColor:"rgba(38,198,249,0.12)",
    percentage:percentage,
  },
  {
    icons:<FaMoneyCheckAlt/>,
    digits:rent[0]?.total,
    isMoney:true,
    title:'Rent',
    type:'1bedrom',
    color:"rgb(38,198,249)",
    bgColor:"rgba(38,198,249,0.12)",
    percentage:rentpercentage
  },
  {
    icons:<FaMoneyCheckAlt/>,
    digits:50*15000,
    isMoney:true,
    title:'expected rent',
    type:'1bedrom',
    color:"rgb(38,198,249)",
    bgColor:"rgba(38,198,249,0.12)",
    // percentage:percentageB
  },
  {
    icons:<FaMoneyCheckAlt/>,
    digits:renta[0]?.total,
    isMoney:true,
    title:'Rent',
    type:'2bedrom',
    color:"rgb(38,198,249)",
    bgColor:"rgba(38,198,249,0.12)",
    percentage:rentpercentage
  },
  {
    icons:<FaMoneyCheckAlt/>,
    digits:50*17000,
    isMoney:true,
    title:'Expected Rent',
    type:'2bedrom',
    color:"rgb(38,198,249)",
    bgColor:"rgba(38,198,249,0.12)",
    // percentage:rentpercentage
  },
  // {
  //   icons:<FaMoneyCheckAlt/>,
  //   digits:renta[0]?.total*17000,
  //   isMoney:true,
  //   title:'ApartmentA',
  //   type:'2bedrom',
  //   color:"rgb(38,198,249)",
  //   bgColor:"rgba(38,198,249,0.12)",
  //   percentage:rentpercentage
  // },
  // {
  //   icons:<FaMoneyCheckAlt/>,
  //   digits:renta[0]?.total*17000,
  //   isMoney:true,
  //   title:'ApartmentA',
  //   type:'2bedrom',
  //   color:"rgb(38,198,249)",
  //   bgColor:"rgba(38,198,249,0.12)",
  //   percentage:rentpercentage
  // },
 
  // {
  //   icons:<FaChartBar/>,
  //   digits:500,
  //   isMoney:true,
  //   title:'Spendings',
  //   color:"#200f33",
  //   bgColor:"#d9f9261e",
  //   percentage:60
  // },
  
]


  return (
    <StyledSummury>
      <MainStats>
<Overview>
  <Title><h2>Summuray overview</h2>
  <p>How the reants are performing compared to the previous month</p>
  </Title>
  
  <WidgetWrapper>
    {data?.map((data,index)=>{
      return(
        <div><Widget key={index} data={data}/></div>
      )
      
    })}
  </WidgetWrapper>
</Overview>
<Charts/>
      </MainStats>
      {/* <SideStats></SideStats> */}
    </StyledSummury>
  )
}

export default Summary



const StyledSummury=styled.div`
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  
  @media screen and (max-width:640px) {
   height     : 30rem;
        
      }
`
const MainStats=styled.div`
  flex: 2;
  width: 100%;
`

const Title=styled.div`
  p{
    font-size: 14px;
    color: whitesmoke;
  }
`

const Overview=styled.div`
  background: rgb(48,51,78);
  color: white;
  width: 100%;
  padding: 1.5rem;
  /* height: 300px; */
  border-radius: 10px;
  margin-bottom:2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width:940px) {
      height  : 30rem;
       margin-left:0; 
      }
`

const WidgetWrapper= styled.div`
  display: flex;
  flex-direction :row;
  flex-wrap:wrap;
  width: 100%;
  gap: 2rem;
  justify-content: space-between;
`
const SideStatus=  styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  background-color:whitesmoke;
  width: 100%;
`