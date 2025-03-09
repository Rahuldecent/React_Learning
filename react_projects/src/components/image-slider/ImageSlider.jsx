import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./styles.css"
export default function ImageSlider({ url, limit = 7, page = 1 }) {
   const [images, setImages] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   async function fetchImages(url) {
      try {
         setLoading(true);
         const response = await fetch(`${url}?page=${page}&limit=${limit}`);
         const data = await response.json();
         console.log("Fetched Data:", data); // Debugging log
         if (Array.isArray(data)) { 
            setImages(data);
         } else {
            setError("Invalid data format received.");
         }
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      if (url) fetchImages(url);
   }, [url, page, limit]); // Added page & limit as dependencies

   if (loading) {
      return <div>Loading Data! Please wait...</div>;
   }

   if (error) {
      return <div>Some Error Occurred: {error}</div>;
   }

   return (
      <div className="container">
         <BsArrowLeftCircleFill className="arrow arrow-left" />

         {images && images.length > 0 ? (
            images.map((item) => (
               <img
                  key={item.id}
                  alt="slider image"
                  src={item.download_url}
                  className="current-image"
               />
            ))
         ) : null}

         <BsArrowRightCircleFill className="arrow arrow-right" />

         <span className="circle-indicators">
            {images && images.length > 0
               ? images.map((_, index) => (
                    <button key={index} className="current-indicator"></button>
                 ))
               : null}
         </span>
      </div>
   );
}
