import React from "react";
import image1 from '../../assets/images/img1.jpg';
import image2 from '../../assets/images/img2.jpg';
import HomeCard from "./HomeCard";
const cards = [
    { id: 1, image: image1, title: "Card One" },
    { id: 2, image: image2, title: "Card Two" },

];

export default function Home() {
     return (
    <div>
      <div className='flex flex-wrap justify-around'>
        <HomeCard url={image1}/>
        <HomeCard url={image2}/>
      </div>
    </div>
  )
}

