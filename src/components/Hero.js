import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Menu', href: '#' },
  { name: 'Reservations', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-white">

        {/* New section with background image */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Background image for the new section */}
          <div
            className="absolute inset-x-0 top-0 h-64 bg-cover bg-center"
            style={{ backgroundImage: "url('your-image-url.jpg')" }}
          ></div>

          {/* Content for the new section */}
          <div className="mx-auto max-w-2xl py-32 sm:py-20 lg:py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to Opulenza Verve, where flavors come to life. Located in the bustling
                city of Noida, we're excited to introduce you to our unique culinary heaven,
                offering a fusion of North Indian, South Indian, and Italian cuisine.
              </p>   
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
