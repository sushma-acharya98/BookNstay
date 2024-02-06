import React from 'react';
import { FaHotel } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex flex-col w-full mb-12 text-center">
          <a className="flex items-center justify-center mx-auto text-gray-900">
            <FaHotel className="w-6 h-6 mr-2 text-blue-500" />
            <span className="text-blue-500 font-bold">BookNstay</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Accommodation </h2>
                <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">Hotels</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Resorts</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Bed and Breakfasts</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Vacation Rentals</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Boutique Hotels</a></li>
                </nav>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Destinations </h2>
                <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">Beach Destinations</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">City Getaways</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Urban Hotels</a></li>
                </nav>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Travel Themes: </h2>
                <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">Romantic Getaways</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Adventure Travel</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Luxury Escapes</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Eco-Friendly Stays</a></li>
                </nav>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Travel Themes: </h2>
                <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">Romantic Getaways</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Adventure Travel</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Luxury Escapes</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Eco-Friendly Stays</a></li>
                </nav>
          </div>
          
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 BookNstay —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* Add more social icons as needed */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
