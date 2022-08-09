import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TenantMainPage = () => {
    const {user}=useSelector((state)=>({...state.auth}))

  return (
    <div className="tenant-page">
        <div className="tenant-header">
        
    

 <Link className='apartment' to='/rent'>  <button className="btn">Dashboard</button></Link> 

                <Link to='/addProject'>
                    <button className='btn'>
                        Pay Rent
                    </button>
                </Link>
        </div>
       
            <div className="tenant-header">
            
                <Link to='/vacation'>
                    <button className='btn'>
                    Vacation notice
                    </button>
                </Link>
                <Link to='/complain'>
                    <button className='btn'>
                        add a complain
                    </button>
                </Link>

            
        </div>
    </div>
  )
}

export default TenantMainPage