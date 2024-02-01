// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// function Edit() {
//   return (
//     <div>
//       <section >
//         <div className="container">
//           <div className="row">
//           <div className="col-md-7">
//               <form action="" className='m-5'>

//                 <h3 className='mb-4 text-center'>update contact</h3>
//                 <InputGroup className="mb-4">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           name
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-4">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           email
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-4">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           phoneno
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-3">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           place
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-4">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           name
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-4">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           email
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-4">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           phoneno
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//       <InputGroup className="mb-3">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           place
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//               </form>
//         </div>
//           <div className="col-md-5">
//           <img height={'300px'} width={'300px'} src="https://help.zoho.com/galleryDocuments/edbsn534781b8a05413b036af529ebe6513d8dd42adc1b90cd9519782d73791e67a161fcd71f8b4cf92a294cb9afbd4021c17?inline=true" alt="" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Edit




import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit';

function Edit() {

  //to hold all input fields data
  const [cid,setId]=useState("")
  const [cname,setName]=useState("")
  const [caddress,setAddress]=useState("")
  const [cphone,setPhone]=useState("")
  const [cemail,setEmail]=useState("")

  //get a particular id of a contact
  const {id}=useParams()
  console.log(id); 

  const base_url='http://localhost:8000'


  // fetch

  const fetchContact=async(id)=>{
    const res=await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(res.data.contacts);
    setId(res.data.contacts.id)
    setName(res.data.contacts.name)
    setAddress(res.data.contacts.address)
    setPhone(res.data.contacts.phone)
    setEmail(res.data.contacts.email)
  }

  useEffect(()=>{
    fetchContact(id)
  },[])

  const location=useNavigate()

  //update employee

  const updatecontact=async(e)=>{
    e.preventDefault()
    const body={
      id:cid,
      name:cname,
      address:caddress,
      phone:cphone,
      email:cemail
    }

    const res=await axios.post(`${base_url}/update-a-contact/${id}`,body)
    console.log(res);
    alert(res.data.message)
    location('/contact')

  }
  return (
    <div>

      <div className="container">
        <div className="row">
        <h1 className='text-center mt-4 text-success'>UPDATE CONTACT DETAILS</h1>
          <div className="col-6">
         
          <form action="" className='p-5 mx-5 border mt-4 shadow bg-light'>
          <MDBInput onChange={(e)=>setId(e.target.value)} value={cid} label='Id' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} value={cname} label='NAME' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} value={caddress} label='ADDRESS' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPhone(e.target.value)} value={cphone} label='PHONE' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} value={cemail} label='EMAIL' id='formControlLg' type='text' size='lg' />
      <br />
     
      <div className='text-center'>
            <button onClick={(e)=>updatecontact(e)} className='btn btn-success m-4'>UPDATE</button>
          </div>
          </form>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Edit