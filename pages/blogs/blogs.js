import React, { useState, useEffect } from "react";

const blogs = [
  {
    title: "BLACK HOLE",
    imageSrc: "/images/yip.png",
    description: "Dive into the world of black holes and learn something amazing.",
    author: "Jean Jacques",
    date: "20 March 2029",
    modalTitle: "WORLD OF BLACK HOLES",
    modalContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga eajjkfjfjfsuibfbbbbb  nic e man hoping to meet hi,m on e day such that no on e can help homim create the magical moment tof the day that the ghanainaa suarexz millie bobb jhon.hoping to meet the greatest man iin tthe world such that there would not meydhsbdhsbhfbsbhjbchjxbcjhxbhchydiufjbfkjnsajjfsig ",
    modalImageSrc: "/images/blogphotos/balckhole.jpg"
  },
  {
    title: "SPACE EXPLORATION",
    imageSrc: "/images/yip.png",
    description: "Explore the vastness of space and the potential for human settlement.",
    author: "John Doe",
    date: "15 April 2029",
    modalTitle: "THE FUTURE OF SPACE EXPLORATION",
    modalContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit...",
    modalImageSrc: "/images/space-exploration-modal.png"
  },
  
  // Add more blog objects as needed
];

const BlogGrid = () => {
  const [modal, setModal] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  const toggleModal = (blog) => {
    setActiveBlog(blog);
    setModal(!modal);
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  return (
    <div>
      <h1 className='text-4xl text-6xl font-bold text-white astro-title mb-20 text-center mt-20'>bloGs</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 text-center">
        {blogs.map((blog, index) => (
          <div key={index} className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <div className="block w-full h-full">
              <img alt="blog photo" src={blog.imageSrc} className="object-cover w-full max-h-40" />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="mb-2 text-xl font-medium text-indigo-800 dark:text-white">{blog.title}</p>
                <p className="font-light text-black-400 dark:text-black-300 text-md">{blog.description}</p>
                <button onClick={() => toggleModal(blog)} className="font-bold bg-blue-800 text-white px-4 py-2 rounded mt-5">View</button>
                <div className="flex items-center text-center mt-4">
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">{blog.author}</p>
                    <p className="text-gray-400 dark:text-gray-300">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && activeBlog && (
        <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content p-5 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
          <h1 className="text-4xl font-bold mt-5 mb-10 text-center">{activeBlog.modalTitle}</h1>
          <img src={activeBlog.modalImageSrc} alt="modal image" className="w-90 h-20 mb-5 mx-auto rounded-lg" />
          <p className="text-lg mb-5">{activeBlog.modalContent}</p>
          <button className="close-modal bg-blue-800 text-white px-4 py-2 rounded mt-5" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
      
      
      )}
    </div>
  );
};

export default BlogGrid;

