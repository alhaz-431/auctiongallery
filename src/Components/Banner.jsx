// import React from 'react';
// import "./Banner.css"
 
// const Banner = () => {
//     return (
//         <div  class="Banner">
//             <h1>Bid Unique Items from <br/>Around the Word.</h1>
            
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
import image from '../assets/banner-min.jpg'; // এটা local image হলে

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" bg-opacity-50 p-5 ">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg mb-6">Discover amazing auctions and bid your way to victory.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
