import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Upcoming = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Define event data in an array
  const eventCards = [
    {
      title: "Paris",
      description: "City of love",
      imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    },
    {
      title: "London",
      description: "Historical and modern",
      imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    },
    {
      title: "New York",
      description: "The city that never sleeps",
      imageUrl: "https://images.unsplash.com/photo-1549921296-3ccf1713a6d8",
    },
    {
      title: "Tokyo",
      description: "Tech and tradition",
      imageUrl: "https://images.unsplash.com/photo-1516557070067-9599b8307283",
    },
    {
      title: "Sydney",
      description: "Australia’s metropolis",
      imageUrl: "https://images.unsplash.com/photo-1513135065346-a098a63a899e",
    },
  ];

  return (
    <section className="bg-transparent z-10 relative">
      <style>
        {`
          .slick-slide {
            padding: 0 8px; /* Adjust the padding as needed */
          }

          .upcoming-image {
            flex: 1;
            overflow: hidden;
          }

          .upcoming-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Upcoming Events</h1>
      </div>

      <div className="container mx-auto px-4 mt-2 md:mt-4">
        <Slider {...sliderSettings}>
          {eventCards.map((event, index) => (
            <div key={index} className="card">
              <article className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-70" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition-opacity duration-300 group-hover:opacity-70"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                  {event.title}
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
                  {event.description}
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Upcoming;
