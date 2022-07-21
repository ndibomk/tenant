import { LinearProgress } from '@material-ui/core'
import React from 'react'

import {Link} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
import moment from 'moment'
const StudentsProjects = ({_id,createdAt,name,apartment,houseNo
,amount,plotA,plotB,idNo
}) => {
  return (
    <div className="tenant-cards">
      <div className="details-card">
        <h3>month of {moment().format('MM YYYY ')}</h3>
    
      {/* <h4> month of {createdAt}</h4> */}
      <div className="align">
        <p>Apartment: </p>
        <p> {apartment}</p>
      </div>
      <div className="line"></div>
      <div className="align">
        <p>Name:</p>
        <p>{name}</p>
      </div>
      <div className="line"></div>
   
    {/* <div className="line"></div> */}
    
      <div className="align">
        <p>Id Number:</p>
        <p> {idNo}</p> 
      </div>
      <div className="line"></div>
     <div className="align">
      <div className="p">rent Paid</div>
      <p> {amount}</p>
     </div>
      <div className="line"></div>
    
    {/* <div className="line"></div> */}
    <div className="align">
      <p className='balance'> balance:</p>
      {plotA-amount}
      <div>
      
      
      {/* projectadded on {createdAt} */}
     {/* <img src={imageFile} alt="" />  */}
     <button className="btn">
      Get Receipt
     </button>
     <div>
      
     </div>
     {/* <Link to ={`/project/${_id}`}>
      read more
     </Link> */}
      </div>
      
      {/* <div className="icon">
        <Link to='/milestone'>
           <AiOutlineArrowRight/>
        </Link>
        </ div> */}
    </div>
   </div>
      {/* <Link to ='/'>
      home
     </Link> */}
   </div>
  
    
   
  )
}

export default StudentsProjects