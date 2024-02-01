import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link} from "react-router-dom";

function Add() {
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const base_url = "http://localhost:8000/add-contact"
  const location=useNavigate()//component to component
  const Addcontacts = (e) => {
   e.preventDefault()
    console.log(id, name,address,phone,email,username,password);
    //apicall to add  details
   const body = {
      id, name,address,phone,email,username,password
    }
    const result = axios.post(base_url, body).then((response)=>{
      console.log(response);
     alert(response.data.message)
      location('/contact')
    })
    .catch((error)=>{
      alert("PLEASE ENTER A UNIQUE ID")
    })
    console.log(result);
    }

  return (
    <div>
       <section >
        <div className="container">
          <div className="row">
          <div className="col-md-7">
              <form action="" className='m-5'>

                <h3 className='mb-4 text-center'>create a contacts</h3>
                <MDBInput onChange={(e)=>setId(e.target.value)} label='id' className='' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} label='name' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} label='address' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPhone(e.target.value)} label='phone' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} label='email' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setUsername(e.target.value)} label='username' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPassword(e.target.value)} label='password' id='formControlLg' type='text' size='lg' />
      <br />
      
      <center>
      {/* <Button   style={{width:'50%',color:'yellow'}} >
       ADD
      </Button> */}
      <button onClick={(e)=>Addcontacts(e)}  className='m-4 btn btn-primary' variant="primary">
        ADD</button>
        <Link to={'/contact'} className='btn btn-warning m-3'> back
              </Link>
      </center>
      <br />
              </form>
        </div>
          <div className="col-md-5">
          <img height={'300px'} width={'300px'} src="https://help.zoho.com/galleryDocuments/edbsn534781b8a05413b036af529ebe6513d8dd42adc1b90cd9519782d73791e67a161fcd71f8b4cf92a294cb9afbd4021c17?inline=true" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Add