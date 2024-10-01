import React from 'react';
import Eventcard from "./eventcard"


const Eventgrid=()=> {


  return (
    <div className='text-center'>
      <h1 className='text-4xl text-6xl font-bold text-white astro-title mb-10 mt-20'>evenTs</h1>
      <div>
        <Eventcard/>
      </div>
      
    </div>
  );
}

export default Eventgrid;