import React from 'react';
const teamMembers = [
  { name: 'NAVEEN VARMA', role: 'chairperson', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/naveenvarma', email: 'naveen@example.com' },
  { name: 'SAURAV', role: 'vice chairperson/tech lead', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/saurav', email: 'saurav@example.com' },
  { name: 'FIDHA V', role: 'vice chairperson', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/fidhav', email: 'fidha@example.com' },
  { name: 'ABHIRAMI PS', role: 'finance officer', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/abhiramips', email: 'abhirami@example.com' },
  { name: 'DURGA M', role: 'secretary', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/durgam', email: 'durga@example.com' },
  { name: 'Frank', role: 'Marketing Head', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/frank', email: 'frank@example.com' },
  { name: 'Grace', role: 'Content Head', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/grace', email: 'grace@example.com' },
  { name: 'Hank', role: 'Program Officer', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/hank', email: 'hank@example.com' },
  { name: 'Ivy', role: 'Designer', imgSrc: '/images/SELFPHOTO.jpg', linkedIn: 'https://www.linkedin.com/in/ivy', email: 'ivy@example.com' },
];

const Currentexecom=()=>{
    return(
      <div className="container mx-auto py-10">
        <h1 className='text-4xl text-6xl font-bold  astro-title2 mb-10 text-center mt-20 mb-20'>Execom</h1>
      <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-12">
        <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg w-48 p-1">
            <img
              src={teamMembers[0].imgSrc}
              alt={`${teamMembers[0].name}'s photo`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{teamMembers[0].name}</h2>
            <p className="text-gray-700 text-center">{teamMembers[0].role}</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
      {/* LinkedIn Icon */}
                <a href="{member[0].linkedin}" target="_blank" rel="noopener noreferrer">
                       <img src="/images/linkedin.png" alt="LinkedIn"  className="w-5 h-5 hover:scale-110 transition-transform duration-300"/>
                </a>

      {/* Email Icon */}
      <a href="mailto:{member[0].email}">
        <img
          src="/images/gmail-logo.png" 
          alt="Email" 
          className="w-5 h-5 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
          </div>
        </div>

        <div className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg w-48 p-1">
            <img
              src={teamMembers[1].imgSrc}
              alt={`${teamMembers[1].name}'s photo`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{teamMembers[1].name}</h2>
            <p className="text-gray-700 text-center">{teamMembers[1].role}</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
      {/* LinkedIn Icon */}
                <a href="{member[1].linkedin}" target="_blank" rel="noopener noreferrer">
                       <img src="/images/linkedin.png" alt="LinkedIn"  className="w-5 h-5 hover:scale-110 transition-transform duration-300"/>
                </a>

      {/* Email Icon */}
      <a href="{member[1].email}">
        <img
          src="/images/gmail-logo.png" 
          alt="Email" 
          className="w-5 h-5 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
          </div>
        </div>

        <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg w-48 p-1">
            <img
              src={teamMembers[2].imgSrc}
              alt={`${teamMembers[2].name}'s photo`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{teamMembers[2].name}</h2>
            <p className="text-gray-700 text-center">{teamMembers[2].role}</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
      {/* LinkedIn Icon */}
                <a href="{member[2].linkedin}" target="_blank" rel="noopener noreferrer">
                       <img src="/images/linkedin.png" alt="LinkedIn"  className="w-5 h-5 hover:scale-110 transition-transform duration-300"/>
                </a>

      {/* Email Icon */}
      <a href="{member[2].email}">
        <img
          src="/images/gmail-logo.png" 
          alt="Email" 
          className="w-5 h-5 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
          </div>
        </div>

        <div className="md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg w-48 p-1">
            <img
              src={teamMembers[3].imgSrc}
              alt={`${teamMembers[3].name}'s photo`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{teamMembers[3].name}</h2>
            <p className="text-gray-700 text-center">{teamMembers[3].role}</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
      {/* LinkedIn Icon */}
                <a href="{member[3].linkedin}" target="_blank" rel="noopener noreferrer">
                       <img src="/images/linkedin.png" alt="LinkedIn"  className="w-5 h-5 hover:scale-110 transition-transform duration-300"/>
                </a>

      {/* Email Icon */}
      <a href="{member[3].email}">
        <img
          src="/images/gmail-logo.png" 
          alt="Email" 
          className="w-5 h-5 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
          </div>
        </div>

        <div className="md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg w-48 p-1">
            <img
              src={teamMembers[4].imgSrc}
              alt={`${teamMembers[4].name}'s photo`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{teamMembers[4].name}</h2>
            <p className="text-gray-700 text-center">{teamMembers[4].role}</p>
            <div className="flex justify-center items-center space-x-4 mt-2">
      {/* LinkedIn Icon */}
                <a href="{member[4].linkedin}" target="_blank" rel="noopener noreferrer">
                       <img src="/images/linkedin.png" alt="LinkedIn"  className="w-5 h-5 hover:scale-110 transition-transform duration-300"/>
                </a>

      {/* Email Icon */}
      <a href="{member[4].email}">
        <img
          src="/images/gmail-logo.png" 
          alt="Email" 
          className="w-5 h-5 hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Currentexecom;