import React, { useState,useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
const testimonials = [
  {
    id: 1,
    
    videoUrl: "https://res.cloudinary.com/dgikemsx7/video/upload/v1728980485/nen7wxffb9vickd6yz3j" // Replace with your video URL
  },
  {
    id: 2,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/faxv0yli4afa1gsfqe4p'
  },
  {
    id: 3,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/nieri9djgtpakkcpdpao'
  },
  {
    id: 4,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/ulvrvxe0ixhgkoe2dzna'
  },
  {
    id: 5,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/t6qbbbqkxdlhxvh0rics'
  },
  {
    id: 6,
    
    videoUrl: "https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/qvuptnidqg82wnzlngta"
  },
  {
    id: 6,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/nmgofd1ajlepqr2h3x0e'
  },
  {
    id: 7,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/ivohoxkkoewmcijurxmi'
  },
  {
    id: 8,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/sh0lsarap5lsrcmrih23'
  },
  {
    id: 9,
    
    videoUrl: 'https://res.cloudinary.com/dgikemsx7/video/upload/f_auto:video,q_auto/fqhxfl5t5xd260v4w6xd'
  },

];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  const openVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl(null);
  };
  useEffect(() => {
    // Reset animation when it completes
    const slider = document.querySelector('.slider')
    if (slider) {
      slider.style.animationPlayState = isHovered ? 'paused' : 'running';
    }
  }, [isHovered]);
  return (
    <div className='my-16'>
      <h1 className='text-5xl font-bold mb-4 text-center'>What our valued clients say about us.</h1>

      <div 
        className="my-16 w-full mx-auto overflow-hidden slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="slider flex"
          style={{ width: `${allTestimonials.length * 100 / testimonials.length}%` }}
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={`${testimonial.id}-${index}`} 
              testimonial={testimonial} 
              index={index} 
              openVideoModal={openVideoModal} 
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <button className="absolute top-2 right-2 text-black z-50" onClick={closeModal}>✖</button>
            <video preload='auto' src={currentVideoUrl} controls className="w-full h-full max-h-[500px]" autoPlay />
          </div>
        </div>
      )}
    </div>
  );
}
