import React from 'react'
import Card from './card'
import data from '../../data/research.json';
const Cardiology = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        ((research.department.first)==="cardiology" || (research.department.second)==="cardiology")?
        <Card key={research.id} research={research}/>
        :null
      ))}
      </div>
    </>
  )
}

export default Cardiology