import React from 'react';
import './DestinationSection.css';

const destinations = [
  {
    id: 1,
    name: "Kerala, India",
    image: "/images/kerala.jpg",
    description: "Explore the scenic beauty of Kerala, with its lush green landscapes, tranquil backwaters, and pristine beaches.",
  },
  {
    id: 2,
    name: "Udaipur, Rajasthan",
    image: "/images/udaipur.jpg",
    description: "Discover the majestic forts and palaces of Udaipur, known as the 'City of Lakes', and immerse yourself in its rich history and culture.",
  },
  {
    id: 3,
    name: "Panjim, Goa",
    image: "/images/goa.jpg",
    description: "Experience the vibrant nightlife, sandy beaches, and Portuguese heritage of Panjim, the capital city of Goa.",
  },
  {
    id: 4,
    name: "Jammu, India",
    image: "/images/jammu.jpg",
    description: "Experience the snow, river rafting, and skiing in Jammu, the city in India.",
  },
];

const DestinationSection = () => {
  return (
    <div className="destination-section">
      <h2>Popular Destinations</h2>
      <div className="destination-cards">
        {destinations.map(destination => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationSection;
