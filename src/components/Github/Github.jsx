import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center flex justify-evenly l m-4 bg-gray-600 text-white p-4 text-3xl'>
        <img src={data.avatar_url} alt="Git picture" width={300} />
        <h1 className='text-green-500'>Name: {data.name}</h1>
        <p className='text-green-500'>Public Repos: {data.public_repos}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ranjeet-7773')
    return response.json()
}