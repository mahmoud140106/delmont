import React from 'react'
import data from '../../data/research.json';
import Card from './card';
import { Link } from 'react-router-dom';

const All = () => {
  return (
    <>
      <div className='card-container' >
      {data.map((research)=>(
        <Card key={research.id} research={research}/>
      ))}
      </div>
    </>
  )
}

export default All