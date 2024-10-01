import React, { useState } from 'react';
import Previous from './previous/prevousteam'
import Current from './current/currentteam'


function CurrentComponent() {
  return <div style={{ padding: '20px', backgroundColor: 'yellow' }}>This is the current component</div>;
}

const Teamcard=()=> {
  const [showCurrent, setShowCurrent] = useState(true);

  const handlePreviousClick = () => {
    setShowCurrent(false);
  };

  const handleCurrentClick = () => {
    setShowCurrent(true);
  };

  return (
    <div className='text-center md:mx-auto ml-5 mt-36'>
      <h1 className='text-4xl text-2xl font-bold text-white astro-title mb-10'>OUR TEAM</h1>
      <button style={{ backgroundColor: 'transparent', color: 'yellow' }} onClick={handlePreviousClick}>Previous</button>
      <button style={{ marginLeft:'20px', backgroundColor: 'transparent', color: 'yellow' }} onClick={handleCurrentClick}>Current</button>
      {showCurrent? <Current/> : <Previous />}
      
    </div>
  );
}

export default Teamcard;