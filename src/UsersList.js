import React, { useEffect, useState } from 'react'
import axios from 'axios';
import img from '../src/images/profile-image.png'

function UsersList() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='container-sm mt-3 mb-3'>
            <div className='row' >
               <h2 className='text-center bg-warning rounded-3 py-2 mb-3'>Employee Details</h2>
                    {data.map((user, index) => {
                        return  <div key={index} className='col-12 col-sm-6 col-md-6 col-lg-3'>
                        <div  className="ms-1 me-1 card mb-2" style={{minHeight:'360px', boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
                                <img className="card-img-top p-2 mx-auto " src={img} alt='profile' style={{width:'40%'}}/>
                            <div className="card-body">
                                <h5 className="card-title text-dark text-start ps-2"><span className='text-primary'>Name : </span>{user.name}</h5>
                                <h6 className="card-title text-start ps-2"><span className='text-primary'>Email : </span>{user.email}</h6>
                                <h6 className="card-title text-start ps-2"><span className='text-primary'>Phone : </span>{user.phone}</h6>
                                <h6 className="card-title text-start ps-2"><span className='text-primary'>Company : </span>{user.company.name}</h6>
                                <p className="card-text text-start ps-2"> <span className='h6 text-primary'>Address :</span> &nbsp;
                                {`${user.address.street},`}
                                <br></br>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; {`${user.address.city}`},
                                <br></br>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; {`${user.address.zipcode}`}.
                                </p>
                                {/* <a href='#' className="btn btn-primary">See Profile</a> */}
                            </div>
                            
                            </div>
                            
                            </div>
                    })}



           

        </div>
            
        </div >
    )
}

export default UsersList