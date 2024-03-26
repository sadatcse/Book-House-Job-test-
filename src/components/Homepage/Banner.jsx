import React from 'react';

const Banner = () => {
    return (
        <div className="flex justify-around items-center bg-gray-200 p-6">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Books to freshen up your bookshelf</h1>
          <p className="text-lg text-gray-600">Explore our collection of books to find your next favorite read.</p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 ease-in-out">Browse Books</button>
        </div>
        <div className="hidden md:block">
          <img src="https://www.books2ebooks.eu/sites/default/files/inline-images/content-front-page-open-book.png" alt="Book" className="w-96 h-96" />
        </div>
      </div>
    );
};

export default Banner;