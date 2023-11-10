import React from 'react'
import data from '../data/research.json';
import "./blog.css"
const Blog = () => {
  return (
    <>
    <div className='blog'>
    {data.map((research)=>(
        <div key={research.id} className='blog-container' data-aos="zoom-in-up" >
        <div><img src={`/${research.image}`} alt={research.image}/></div>
        <div className='content'>
            <p><i className="fa-solid fa-comment"></i>3 comment<i className="fa-solid fa-user"></i>alex</p>
            <h3>{research.name}</h3>
            <p className='description'>{research.description}</p>
        </div>
    </div>
    ))}

    </div>
    </>
  )
}

export default Blog