import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Contactpage.css'
import axios from 'axios'


function Contactpage() {
      //apifetch
      const base_url='http://localhost:8000'
      const [allContacts,setAllContacts]=useState([])

      const fetchData=async()=>{
        const result=await axios.get(`${base_url}/get-all-contacts`)//contactdetails to result
        console.log(result.data.contacts);//object to array of contacts
        setAllContacts(result.data.contacts)
      }
        console.log(allContacts);
        const Deletecontact=async(id)=>{
            const result=await axios.delete(`${base_url}/delete-contact/${id}`)
            alert(result.data.message)
            fetchData();
          }
      useEffect(()=>{
        fetchData()
      },[])
   
  return (
    <div>

        <div className="container">
            <div className="row">
            <div className='d-flex p-3'>
            <p className='h4 m-2'>contact manager</p>
            <Link to={'/add'}>
            <button className='btn btn-success m-2'>new</button>
            </Link>
            <Link to={'/'} className='btn btn-warning m-2'> EXIT
                                    </Link>
            </div>
            <p>Why is contact us important?
A Contact Us page is essential to building a brand's website as it allows visitors to contact you easily without leaving their browser. They also give you the opportunity to capture leads and improve customer service. </p>
            </div>
            
              
                          {
                            allContacts.map((item)=>(
                                <div className="row d-flex">
                                    <div className='contact-list'>
                                <div className="container">
                                    <div className="row mb-5 mt-3">
                                   <div className="col-2">
                                   
                                   </div>
                                   <div className="col-8">
                                   <div className="col-md-10">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                        <div className="col-md-3">
                                            <img className='contact-img' src="data:image/png;base64,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" alt="" />
                                        </div>
                                <div className="col-md-5">
                                <ul className='list-group m-3'style={{listStyle:'none'}}>
                                    <li className='lisi-group-item'>
                                        id:<span className='fw-bold m-2'>{item.id}</span>
                                    </li>
                                    <li className='lisi-group-item'>
                                        name:<span className='fw-bold m-2'>{item.name}</span>
                                    </li>
                                    <li className='lisi-group-item'>
                                        address:<span className='fw-bold m-2'>{item.address}</span>
                                    </li>
                                    <li className='lisi-group-item'>
                                        phone:<span className='fw-bold m-2'>{item.phone}</span>
                                    </li>
                                    <li className='lisi-group-item'>
                                        email:<span className='fw-bold m-2'>{item.email}</span>
                                    </li>
                                    <li className='lisi-group-item'>
                                        password:<span className='fw-bold m-2'>{item.password}</span>
                                    </li>
                                    
                                </ul>

                            </div>
                            <div className="col-md-2 d-flex flex-column ">
                                    <Link className='btn btn-warning my-1' to={`/view/${item.id}`}>
                                        <i className='fa fa-eye'></i>
                                    </Link>
                                    <Link className='btn btn-primary my-1' to={`/edit/${item.id}`}>
                                        <i className='fa fa-pen'></i>
                                    </Link>
                                    <button className='btn btn-danger'>
                                        <i onClick={()=>Deletecontact(item.id)} className='fa fa-trash' ></i>
                                    </button>
                            </div>
                            </div>
                        </div>
                    </div>
                                    </div>
                                   </div>
                                   <div className="col-2">
                                   
                                   </div>
                        </div>
                    </div>
               </div>
          
                                </div>
                            ))
                          }
                            
        </div>


    </div>
  )
}

export default Contactpage