import React from 'react';
import image1 from '../images/storytrial2.jpg';

const OurStory = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-5">
                    <div>
                        <p className="text-lg text-gray-600 mb-4">
                            Opulenza Verve's journey began with a vision - to create a dining experience that
                            blends the best of North Indian, South Indian, and Italian cuisines.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our story unfolds on the vibrant streets of Noida, where we embarked on a gastronomic
                            adventure to curate a menu that celebrates diversity and exquisite tastes.
                        </p>
                    </div>
                    <div>
                        <img
                            src={image1} // Replace with your actual image path
                            alt="Restaurant Image"
                            className="max-w-full h-auto md:h-96 mr-4 rounded-lg shadow-lg "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
