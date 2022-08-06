import React, { useEffect } from 'react';
import Pdf from "react-to-pdf";
import axios from 'axios'
import { useState } from 'react';
const ref = React.createRef();

const PDF = (props) => {
  const [admin,setAdmin]=useState([])
  useEffect(()=>{
    async function fetchData(){
    try {
      const res= await axios.get('http://localhost:5000/stats/projects/single')
      setAdmin(  res.data)
      console.log(admin);
     } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
      },[])

  return (
    <>
      <div className="Post" ref={ref}>
      {admin.map((items)=>{
        return(
          <div>
            <p> RentPaid: {items.amount}</p>
              <p>ApartMent: {items.apartment}</p>
              <p> HouseNo: {items.houseNo}</p>
              <p>IdNo: {items.idNo}</p>
              
          </div>
           
        )
     
    })}
      </div>
      <Pdf targetRef={ref} >
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;