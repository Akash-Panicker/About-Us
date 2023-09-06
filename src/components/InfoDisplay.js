import React from 'react';
import image2 from '../images/ourpledge.avif';
import image1 from '../images/a_culinary_fest.webp';

const InfoDisplay = () => {
  const imageDimensions = "h-100 w-100";
  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
        <div className="flex md:flex-col md:justify-center">
          <img
            src={image1}
            alt="I1"
            className="max-w-full h-98 w-98 rounded-lg shadow-lg"
            style={{ verticalAlign: 'top' }}
          />
        </div>
        <div className="flex md:flex-col md:justify-center max-w-screen-md"> {/* Set a maximum width for the text container */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-center">A Culinary Feast</h2>
            <br></br>
            <p className="text-gray-600 mt-4">
              Join us on a culinary odyssey where every dish is a work of art,
              crafted with passion and authenticity. From the aromatic spices of
              North India to the vibrant flavors of South India, and the finesse of
              Italian cuisine, every plate tells a tale.
            </p>
            <p className="text-gray-600 mt-4">
              Our culinary artists take inspiration from their heritage, infusing
              each creation with tradition and innovation.
            </p>
            <p className="text-gray-600 mt-4">
              From the aromatic spices of North India to the vibrant flavors of
              South India, and the finesse of Italian cuisine, every plate tells a
              tale.
            </p>
            <br></br>
            
            <div className="text-center"> {/* Center the button horizontally */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Explore Our Culinary Delights
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
        <div className="flex md:flex-col md:justify-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-center">Our Pledge</h2>
            <br></br>
            <p className="text-gray-600 mt-4">
              We are unwavering in our commitment to quality. We source the freshest local
              ingredients to ensure every bite is a burst of flavor.
            
              Our team of chefs, each a master in their craft, pour their expertise and creativity into every dish, presenting a symphony of tastes that will leave you wanting more.
            </p>
            <br></br>
            <br></br>
            <div className="text-center"> {/* Center the button horizontally */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Dive into Flavor
              </button>
            </div>
          </div>
          
        </div>
        <div className="flex md:flex-col md:justify-center">
          <img
            src={image2}
            alt="I2"
            className="max-w-full h-98 w-98 rounded-lg shadow-lg"
            style={{ verticalAlign: 'top' }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoDisplay;
