import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { singelSmartPhone } from '../Slices/shanto'
const Home = () => {

  const [mylove , myloveForEver]=useState([])


  useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/666de70ce41b4d34e403c3c1')
    .then( (love)=>{myloveForEver(love.data.record)})
  },[])
  
 const dispacth = useDispatch()


 const next = useNavigate()
  const transper = (yes)=>{
    next('/Details')
    dispacth(singelSmartPhone(yes))
   
  }


  return (
    <>
    <div className="one w-full h-full bg-orange-700 ">
    {
     mylove.map((AllisWell , Unique)=>(












      <div key={Unique} className="  ">
        <img src={AllisWell.image} alt="photo" />
        <h1> {AllisWell.name} </h1>
        <button onClick={ ()=> transper(AllisWell)} className=' bg-[#fff]  rounded-[3px] p-[20px] m-[5px] ' > more </button>
      
      </div>















     ))
    }









    </div>



  


   
      
















    </>
  )
}

export default Home
