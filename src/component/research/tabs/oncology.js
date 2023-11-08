import React from 'react'
import data from '../../data/research.json';
import Card from './card';
const Oncology = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        ((research.department.first)==="oncology" || (research.department.second)==="oncology")?
        <Card  key={research.id} research={research}/>
        :null
      ))}
      </div>
    </>
  )
}

export default Oncology