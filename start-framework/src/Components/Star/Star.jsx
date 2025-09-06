import React from 'react'

export default function Star(props) {
    let{color,bgColor}=props
  return (
    <>
    <div className="d-flex align-items-center my-2  justify-content-center">
        <div className={`line  ${bgColor}`}></div>
    <i className={`fa-solid fa-star mx-3 ${color}`} ></i>
        <div className={`line  ${bgColor}`}></div>
    </div>
    
    </>
  )
}
