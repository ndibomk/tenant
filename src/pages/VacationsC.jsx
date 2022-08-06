import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VacationsC = () => {
    const [admin,setAdmin]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
          const res= await axios.get('http://localhost:5000/stats/projects/vacationc')
          setAdmin(  res.data)
          console.log(admin);
         } catch (error) {
          console.log(error);
          
        }
        }
        fetchData()
          },[])

  return (<>
    <h4 className='headers'>Apartment C all Vacations</h4>

    <div  className='rent-page'>
    {admin.map((items)=>{
      return(
        <div className='rent-card'>
<p>Apartment C</p>

<p className='cardtitles'> <p> Name:   </p> <p>{items.name}</p> </p>
              <p className='cardtitles'> <p>Reason: </p>   <p>{items.reason}</p> </p>
              <p className='cardtitles'> <p>Remaining Time in The month:</p>  <p>{ ('') }{items.remTime}</p> </p>
              <p className='cardtitles'> <p>ApartMent Name:</p> <p>{items.apartment}</p> </p>
              <p className='cardtitles'> <p>HouseNo:</p> <p>{items.houseNo}</p> </p>
              <p className='cardtitles'> <p>IdNo:</p>  <p>{items.idNo}</p></p>
              <p className='cardtitles'> <p>Condition of The house:</p> <p>{items.codition}</p> </p> 
              </div>
      )
    })}
    </div>
 </> )
}

export default VacationsC