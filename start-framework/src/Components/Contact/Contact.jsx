import React, { useEffect } from 'react'
import Star from './../Star/Star';

export default function Contact() {
  useEffect(()=>{
   document.querySelectorAll('input').forEach(
    input => input.addEventListener('input', () => {
      if(input.value!=""){

        input.previousElementSibling.classList.add("relative")
      }
      else{
        input.previousElementSibling.classList.remove("relative")
      }
    })
   );
    
  },[])
  console.log(document.querySelectorAll('input'));
  return (
    <>
    <div className="portfolio vh-90 ">
              <div className="inner text-center">
                <h1 className='fw-bold fs-1 text-uppercase text-blue'>Contact Section</h1>
                <Star color={"text-blue"} bgColor={"bg-blue"}/>
                <div className="container">
                  <form className='w-50 mx-auto'>
                    <div className='position-relative'>
                      <label htmlFor="uname">User Name</label>
                    <input type="text" id="uname" name="uname" placeholder='User Name' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5  ' />
                    </div>
                    
                    <input type="number" id="uage" name="uage" placeholder='User Age' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
                    <input type="email" id="uemail" name="uemail" placeholder='User Email' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
                    <input type="password" id="upass" name="upass" placeholder='User Password' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
                    <button className="btn d-block text-white ">send Message</button>
                  </form>
                </div>
                  
              </div>
            </div>
    </>
  )
}
