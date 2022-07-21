import React from 'react'
import { Link } from 'react-router-dom'

const TenantMainPage = () => {
  return (
    <div className="tenant-page">
        <div className="tenant-header">
            <Link to='/dashboard'>
                    <button className='btn'>
                        Dashboard
                    </button>
                </Link>
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