import React from 'react'

function HomeCard({ url }) {
  return (
    <div
      className='relative bg-center bg-contain rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 aspect-[3/4] w-52 md:w-60 m-5 border border-gray-200'
      style={{ backgroundImage: `url(${url})` }}
    >
      {/* Optional overlay for text */}
      {/* <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-2xl'>
        Card Title
      </div> */}
    </div>
  );
}

export default HomeCard