import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
            <h2 className='pt-5 text-dark' style={{fontWeight:'800'}}>Employee Management</h2>
                <div className='background'>
                
                </div>
                <Link className='btn btn-primary mb-2' to="/EmpList" >View Employee Details.. </Link>
            </div>

        </div>
    </div>
  )
}

export default Home