import React from 'react'
import data from '../../data/research.json';
import Card from './card';
const Pediatric = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        ((research.department.first)==="pediatric" || (research.department.second)==="pediatric")?
        <Card research={research}/>
        :null
      ))}
      </div>
    </>
  )
}

export default Pediatric