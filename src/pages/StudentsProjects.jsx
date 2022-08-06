import React from 'react'
import jsPDF from 'jspdf'
import {Link} from 'react-router-dom'
// import {AiOutlineArrowRight} from 'react-icons/ai'
import moment from 'moment'
const StudentsProjects = ({_id,createdAt,name,aptType,apartment,houseNo
,amount,plotA,plotB,idNo
}) => {

const a=()=>{
if(aptType==='1bedroom'){
  return amount-plotA
}else return amount-plotB
}
console.log('rebt ', );
  const doc= ()=>{
    var pdf =new jsPDF('landscape', 'px','a4','false');
    
    
    pdf.text(30,10,`month of ${moment().format('MM YYYY ')}`)
    pdf.text(30,30,`name: ${name}`)
    pdf.text(30,50,`Amount: ${amount}`)
    pdf.text(30,70,`Apartment: ${apartment}`)
    pdf.text(30,85,`name: ${houseNo}`)
    pdf.text(30,100,`balance: ${amount-plotA}`)
    
    
    pdf.save('recipt.pdf')
  }
  return (
    <div className="tenant-cards">
      <div className="details-card">
        <h3 className='month'>month of {moment().format('MM YYYY ')}</h3>
    
      {/* <h4> month of {createdAt}</h4> */}
      <div className="align">

        <p className='cardtitle'>Apartment:</p>
        <p> {apartment}</p>

      </div>
      <div className="line"></div>
      <div className="align">
        <p className='cardtitle'>Name:</p>
        <p>{name}</p>
      </div>
      <div className="line"></div>
   
    {/* <div className="line"></div> */}
    
      <div className="align">
        <p className='cardtitle'>Id Number:</p>
        <p> {idNo}</p> 
      </div>
      <div className="line"></div>
     <div className="align">
      <div id="p"className='cardtitle'>rent Paid</div>
      <p> {amount}</p>
     </div>
      <div className="line"></div>
    
    {/* <div className="line"></div> */}
    <div className="align" >
      <p id='balance' className='cardtitle'> balance:</p>
      {plotA-amount}
      <br />
      <div>
      
      
      {/* projectadded on {createdAt} */}
     {/* <img src={imageFile} alt="" />  */}
     
     
     <Link to ={`/project/${_id}`}>
      read more
     </Link>
      </div>
      
      {/* <div className="icon">
        <Link to='/milestone'>
           <AiOutlineArrowRight/>
        </Link>
        </ div> */}
    </div>
    <button onClick={doc} className="btn" id='btnreceipt' >
      Get Receipt
     </button>
   </div>
      {/* <Link to ='/'>
      home
     </Link> */}
   </div>
  
    
   
  )
}

export default StudentsProjects