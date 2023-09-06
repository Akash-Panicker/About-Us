import React from 'react';
import image1 from '../images/opexptrial3.jpg';

const Experience = () => {
    return (
        <section className="bg-black py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-white">The Opulenza Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
                    <div>
                        <p className="text-lg text-white m-7 p-10">
                            At Opulenza Verve, dining is an elevated experience. Our refined ambiance,
                            gracious hospitality, and a menu designed to tantalize your taste buds create an
                            atmosphere where you can cherish unforgettable moments with friends and
                            family.
                        </p>
                    </div>
                    <div>
                        <img
                            src={image1} // Replace with your actual image path
                            alt="Restaurant"
                            className="max-w-full h-auto md:h-96 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
