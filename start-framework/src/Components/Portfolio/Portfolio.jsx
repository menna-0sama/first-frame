import React, { useState } from 'react'
import Star from './../Star/Star';
import img1 from '../../assets/port1.png'
import img3 from '../../assets/port3.png'
import img2 from '../../assets/port2.png'
import Card from '../Card/Card';
export default function Portfolio() {
  let [imgSrc,setImgSrc]=useState("")
  let images =[
    {id:'img1',img:img1},
    {id:'img2',img:img2},
    {id:'img3',img:img3},
    {id:'img4',img:img1},
    {id:'img5',img:img2},
    {id:'img6',img:img3},
  ]
  let changeImgSrc =(img)=>{
    setImgSrc(img)
  }
  return (
    <>
     <div className="portfolio vh-90 d-flex align-items-center justify-content-center">
          <div className="inner text-center  d-flex align-items-center flex-column">
            <h1 className='fw-bold fs-1 text-uppercase text-blue'>Portfolio Component</h1>
            <Star color={"text-blue"} bgColor={"bg-blue"}/>
            <div className="container">
              <div className="row g-3">
                {images.map(img=><Card key={img?.id} img={img} changeImgSrc={changeImgSrc}/>)}

               
                {/* {images.map(img=><>

<div key={img.id} class="modal fade" id={img.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body p-0 rounded overflow-hidden">
        <img src={img.img} alt="" className='w-100 d-block' />
      </div>
      
    </div>
  </div>
</div>
                </>)} */}
              </div>
            </div>
          </div>
        </div>
         {imgSrc && <>
                <div onClick={()=>changeImgSrc()} className='position-fixed top-0  end-0 start-0 bottom-0 modal z-3 d-flex justify-content-center align-items-center'>
                  <img src={imgSrc} alt="" className='w-50' />
                </div>
                </>}
    </>
  )
}
