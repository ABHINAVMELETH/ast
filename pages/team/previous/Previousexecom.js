import React from 'react';
const teamMembers = [
  { name: 'CAREN', role: 'COO', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/naveenvarma', email: 'naveen@example.com' },
  { name: 'HARI', role: 'CEO', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/saurav', email: 'saurav@example.com' },
  { name: 'AKSHAY SANTHOSH', role: 'vice chairperson', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/fidhav', email: 'fidha@example.com' },
  { name: 'ABHIRAMI PS', role: 'CMO', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/abhiramips', email: 'abhirami@example.com' },
  { name: 'DURGA M', role: 'CFO', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/durgam', email: 'durga@example.com' },

  { name: 'Hank', role: 'Program Officer', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/hank', email: 'hank@example.com' },
  { name: 'Ivy', role: 'Designer', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/ivy', email: 'ivy@example.com' },
];


const Previousexecom=()=>{
    return(
      <div className="container mx-auto py-10">
  <h1 className='text-4xl text-6xl font-bold astro-title2 mb-10 text-center mt-20 mb-20'>Execom</h1>
  <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
    {teamMembers.slice(0, 4).map((member, index) => (
      <div key={index} className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-48 p-1">
          <img
            src={member.imgSrc}
            alt={`${member.name}'s photo`}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold text-center">{member.name}</h2>
          <p className="text-gray-700 text-center">{member.role}</p>

          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-4 mt-2">
            {/* LinkedIn Icon */}
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="w-5 h-5 hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* Email Icon */}
            <a href={`mailto:${member.email}`}>
              <img
                src="/images/gmail-logo.png"
                alt="Email"
                className="w-5 h-5 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    );
}

export default Previousexecom;