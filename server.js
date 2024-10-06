const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = 5000;

// Allow all origins
app.use(cors());

// Mock data for events
const events = [
  {
    title: "astrocet",
    description: "It is a great way to promote the space deterioration method to check the redemption and ask for promotion.",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1624568931.jpg", // Change imgSrc to imageUrl for consistency
  },
  {
    title: "Space Telecomping Workshop",
    description: "It is a great way to promote the space deterioration method to check the redemption and ask for promotion.",
    imageUrl: "/images/yip.png", // Change imgSrc to imageUrl for consistency
  },
  {
    title: "Rocket Science Basics",
    description: "An introductory workshop on the fundamentals of rocket science and space exploration.",
    imageUrl: "/images/yip.png", // Change imgSrc to imageUrl for consistency
  },
  {
    title: "Astrophysics Seminar",
    description: "Join us for an in-depth seminar on the latest discoveries in astrophysics and space technology.",
    imageUrl: "/images/yip.png", // Change imgSrc to imageUrl for consistency
  },
];

const eventCards = [
  {
    title: "Keraleeyam",
    description: "conducted a fest webinar at the keraleeyam in comprimising the dssihhjjkfjabfjajbbjbfbsanmas fms fnshf",
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
  },
  {
    title: "Young Idea Conclave",
    description: "conducted a fest webinar at the keraleeyam in comprimising the dssihhjjkfjabfjajbbjbfbsanmas fms fnshf",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1624568931.jpg",
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
  },{
    title: "Young Idea Conclave",
    description: "conducted a fest webinar at the keraleeyam in comprimising the dssihhjjkfjabfjajbbjbfbsanmas fms fnshf",
    imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1624568931.jpg",
  },
];

const announcements = [
  {
    id: 1,
    title: "test",
    image: "/images/frontpage/announcements/announcement1.jpg", // You can use space-themed images
    description: "Join our upcoming event to explore the wonders of the universe, from stars to galaxies and beyond.",
  },
  {
    id: 2,
    title: "Mission to Mars",
    image: "/images/frontpage/announcements/announcement1.jpg",
    description: "Learn about our mission to colonize Mars and how you can be part of the next big leap for humanity.",
  },
  {
    id: 3,
    title: "Astronomy Night",
    image: "/images/frontpage/announcements/announcement1.jpg",
    description: "Join us for a night under the stars as we explore constellations and observe celestial events.",
  },
];

// API endpoint to serve the events
app.get('/api/events', (req, res) => {
  res.json(events);
});
app.get('/api/announcements', (req, res) => {
  res.json(announcements);
});

// API endpoint to serve upcoming events
app.get('/api/upcoming', (req, res) => {
  res.json(eventCards);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
