import React from 'react'
import data from '../../data/research.json';
import Card from './card';
const Orthopedics = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        ((research.department.first)==="orthopedics" || (research.department.second)==="orthopedics")?
        <Card key={research.id} research={research}/>
        :null
      ))}
      </div>
    </>
  )
}

export default Orthopedics