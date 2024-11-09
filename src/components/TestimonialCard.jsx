import React, { useState } from 'react';

const TestimonialCard = ({ testimonial, index, openVideoModal }) => {
  return (
    <div className='flex-shrink-0 w-[300px] mx-4 my-8 shadow-lg rounded-lg bg-white'>
      
        <div className="space-y-2 flex flex-col items-center">
          <div className="h-[400px] w-full bg-slate-300 cursor-pointer" onClick={() => openVideoModal(testimonial.videoUrl)}>
            {/* Thumbnail or video preview */}
            <video 
              className='rounded-lg w-full h-full object-cover' 
              src={testimonial.videoUrl} 
              muted 
              loop 
              autoPlay
            />
          </div>
        </div>
      
    </div>
  );
};

export default TestimonialCard;
