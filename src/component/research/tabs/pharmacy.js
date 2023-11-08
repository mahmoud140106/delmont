import React from 'react'
import data from '../../data/research.json';
import Card from './card';
const Pharmacy = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        ((research.department.first)==="pharmacy" || (research.department.second)==="pharmacy")?
        <Card  key={research.id} research={research}/>
        :null
      ))}
      </div>
    </>
  )
}

export default Pharmacy