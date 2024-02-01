import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        <div className="container m-4">
            <div className="row">
                <div className="col-md-5 mt-5">
                    <img src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif" alt="" width={'300px'}/>
                </div>
                <div className="col-md-7">
                    <h1 className='m-4'>
                        call with <span style={{color:"brown"}}><i>me</i></span>
                    </h1>
                    <p className='m-2'>
                    On your Contact Us page, you should write a small amount of content to explain your usual preferences for contact with customers. Do you prefer them to call, use your contact form, or do you have specific opening hours when they can visit? It's best to explain this.
                    </p>
                    <Link to={'/contact'}>
                    <button className='btn btn-primary m-5'>
                        get started
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>


    </div>
  )
}

export default Homepage