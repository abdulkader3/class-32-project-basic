import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {


    const trueLove = useSelector((state)=> state.shanto.value)


console.log(trueLove)


  return (
    <>
    <div className=" w-full h-[1000px] bg-amber-500  ">
        <h2 className=' text-[400px]  ' >Details/</h2>

        <h3>{trueLove.name}</h3>
    </div>
      
    </>
  )
}

export default Details
