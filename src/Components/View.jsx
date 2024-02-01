import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";


function View() {
  const base_url = "http://localhost:8000"

const {id}=useParams()
console.log(id);//1

const [contact,setContacts] = useState({})

const fetchContact = async(id)=>{
    const result = await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.contacts);
    setContacts(result.data.contacts)
  
}

console.log(contact);

useEffect(()=>{
    fetchContact(id)
},[])

  return (
    <div>
      <section className='view-contact-intro p-3'>
        <div className="container">
          <div className="row">
            <div className="cpl">
              <p className="h3 text-warning">
                view contact
              </p>
              <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat quam eaque veritatis dolorum, impedit, provident expedita mollitia, natus facilis optio cum ipsum eos numquam suscipit placeat eveniet? Eveniet, voluptatem?</p>
            </div>
          </div>
        </div>

      </section>
      <section className='view-contact'>
          <div className="container">

           <div className="row">
            <div className="col-3"></div>
            <div className="col-5">
            <div className="card d-flex  justify-content: space-between">
           <div className="row">
              <div className="col-md-4">
                <img className='m-4 mr-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAY1BMVEX///8AAAD8/Pzy8vL29vbu7u7b29tRUVEEBATh4eGOjo5ra2vm5uYoKCg4ODjT09PCwsJfX1/IyMifn592dnanp6dISEi0tLQeHh4YGBhlZWV/f389PT0SEhK6urovLy+WlpZcCCtwAAAFtElEQVR4nO1b25KiMBCFAAlXgwiIoOL/f+WGBBhcIemtCtNWLefJqYHy2KS7T19wnAMHDhw4cODAgQMH/mMQbAKbEMyioqpeXfWkgfOVTL347ir0rLx62HTeIezlvQZuoTvjfol8bF4/IE7O3A88kirFZjaj+uQnkZXBV5xIUm4QHBAH6PQcR0NQHExGka1ISKexoGT5xCW4eQYXZsxRrRgZCA44RYgEyUqY+cQZMTTmEIKu+0R7zv4ZxvCExhByCiVyJILOFcowxmJoioUzWiyxAzyGQupgBZwayjCj387Q5V/PsPh6hlg2BOU8VIY67fqGHsuXYyjDGqtkMYnDGQmWuuFQhmhZL4UyrLAYgs/hFYlgGpq5KWAphyeUIJovg+UhmrYpwE8Zy4bRDcoQKx6SDMqwwyH4DxobLR5CXeWB1nWA5hSG17kBSgfExk0AUtkxZu8L5CtYWVkCoh16rFJUogAwZLhzi8bM8ILbyb6YGSIPqKjRiCUuQcc4C3hglcozqIFhR9CnUrGrk4mZhz83C3qdCdFUzRI6hVOiG1BiO+Kc0QePEmS7B/Y1E2YvWeV3ivC9xBksGKWS4rtHi79O1KFfYUSP8VUr1kK30vMX7GQUjWqwVqLwC8PJfu7tRYR501OPnVKCTuRlpf/4siNbKmJe6zYdpj9HsazpJcNhJyhmp6zpT+w1HT+ZtZuY4ihEUkwCe6GhI168ecd4SVL9vs72Knab/Hft28cwc5nOZZ/86oFMn8szF44Mo/JJA98hJKDPZJzXPpd7TL+2IpR3tbsMf3NH4eJm56RMEpbNmit/LAPQvdt9NiUiSPGR4maGpJ2zyRQGo7+bT6zYOc2kK5L6Fk30aTYeu3km758+Lu92fdbFmhZsfpoe1UAvXGqu++f1/Y6Per06zmaGRM0ilx3X1abEbhQ3ujTZonHEB89Y7l2sFlos2En0bCjVPn2/Jlnes94du+zCz/E2KqY3hj57+3PjYIT7SJ4tsX9aUCIOf6+dNho7uxjRX3FLicec9cThSsszdxYlcrt+z30PLfHcLIsXBqlE/GuqH4Lpxrhgj61EzTLpTXmmqAdGpc1mq262kXcoU1NNC2mULf6cEB+javU2e7SNfV2rGzOOA50fM/ejhTQjcvtRe73gVJgGi7O3s/EmzaqG/aadtk84nvu5PzJNyTS3ZLYJ6ptwiXqqxTSKHBlrxy22hyyGAZkK2nTSWsqX9SuetrtihlarComzM6ukxrUnw/K8dDtsKNzVYx7dqVYZ46W9xXI7ItpKeSMeKnhMxafk62tbn7Y3C7hpYaCTeWU8rS9HvhOivyO0W54aJ8lK4IwRWjmBaeZnd9ynP1IDpLD2lXXkZ9poW/DK0vZg3jSs5XXKnhT0o85WGQJ2LoL5l7DhY2D8UVazim8m6L6GC6Xh2uETYGpqU4AFAIZsiG/Sf2Us3hDXPwhdmwIMsmgoQ6K8cHBliNVthhvA2krodkOTsx+/2ez8dsMNYIosjOiP/uEB3wuxWfDBXlEQmssfNKuz0GE62NQOxmMvMSjrWEXGzhCtJVqLDGGr4Q2VojV2iA/a+2PmLwajhphEhsT8MTgAbJeptkfQB74AICSfKOE59IWB2l7jITCowxmFQ/omcjhsdfJuL2SDGYoSk9UBKBjaZQg9h0OgKVvfLBoUaouJGfgSRSi8pCrBi5OlxU4sZL1LonWKGPzaitXGCPRNlIwHuQe8NjF/7T+AXGFpxb0QAntboL3abnL6FPTNNfEgD1kOdHeYB/COGcsBbnoft2HdnmNSj1e6Nt2gEvWmTi5895k98fmL9ZstmfCx8Y+mZzH3f229RdgybqGZRmSPNq7476+NeCnNL8nn8PMdp+SS0xR3qcWn+atLzqw+ZTfxkG/urelrdk661xVpBWMdfpBSXuTFAE7T4Ju4HThw4MCBAwcOHDhwYIE/Lb5B8i5zZCEAAAAASUVORK5CYII=" alt="" />
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-7 mt-3">
              <ul className='list-group mr-4 mb-3' style={{listStyle:'none'}}>
                                    <li className='lisi-group-item m-1'>
                                        id:<span className='fw-bold'>{contact.id}</span>
                                    </li>
                                    <li className='lisi-group-item m-1'>
                                        name:<span className='fw-bold'>{contact.name}</span>
                                    </li>
                                    <li className='lisi-group-item m-1'>
                                        address:<span className='fw-bold'>{contact.address}</span>
                                    </li>
                                    <li className='lisi-group-item m-1'>
                                        phone:<span className='fw-bold'>{contact.email}</span>
                                    </li>
                                    <li className='lisi-group-item m-1'>
                                        email:<span className='fw-bold'>{contact.username}</span>
                                    </li>     
                                    
                                </ul>
              </div>
            </div>
           </div>
            </div>
            <div className="col-4"></div>
           </div>
            <div className="row">
              <div className="col">
              <Link to={'/contact'} className='btn btn-warning m-3'> back
              </Link>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default View