import React from 'react'
import Card from './card'
import data from '../../data/research.json';

const Anesthesiology = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        ((research.department.first)==="anesthesiology" || (research.department.second)==="anesthesiology")?
        <Card key={research.id} research={research}/>
        :null
      ))}
      </div>
    </>
  )
}

export default Anesthesiology