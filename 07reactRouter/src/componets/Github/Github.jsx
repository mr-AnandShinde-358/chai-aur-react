import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary').then(response=>response.json()).then(data=>{console.log(data)
    // setData(data)})
    // },[])
const data= useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git pic" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
   const response= await fetch(`https://api.github.com/users/hiteshchoudhary`)
    // console.log(response)
    // console.log(response.json())
    // let data= await response.json()
    // console.log(data)
    return response.json()
}
