import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../../public/Data.json';
import Swal from 'sweetalert2';

const DetailsBook = () => {
    const { id } = useParams();
    const foundBook = Data.find(book => book.bookId === id);
    const [isBookRead, setIsBookRead] = useState(false);

    const handleReadButtonClick = (book) => {
        const { bookId } = book;
        const status = 'read';
        const newdata = { ...book, status }; // Including the entire book data along with status
        setIsBookRead(true);
    
        const existingData = JSON.parse(localStorage.getItem('bookData')) || {};
    
        if (existingData[bookId]) {
            Swal.fire({
                icon: 'warning',
                title: 'Already Marked as Read!',
                text: 'This book is already marked as read.',
            });
            return; 
        }
    
        const updatedData = { ...existingData, [bookId]: newdata };
        localStorage.setItem('bookData', JSON.stringify(updatedData));
        
        Swal.fire({
            icon: 'success',
            title: 'Read Completed!',
            text: 'You have completed reading this book.',
        });
    };

    const handleWishlistButtonClick = (book) => {
        const status = 'list';
        const newdata = { ...book, status }; // Including the entire book data along with status
        
        const existingData = JSON.parse(localStorage.getItem('wishlistData')) || {};
        
        if (existingData[book.bookId]) {
            Swal.fire({
                icon: 'warning',
                title: 'Already in Wishlist!',
                text: 'This book is already in your Wishlist.',
            });
            return; 
        }
    
        const updatedData = { ...existingData, [book.bookId]: newdata };
        localStorage.setItem('wishlistData', JSON.stringify(updatedData));
        
        Swal.fire({
            icon: 'success',
            title: 'Added to Wishlist!',
            text: 'This book has been added to your Wishlist.',
        });
    };
    
    const wishlistButtonStyle = {
        backgroundColor: foundBook ? foundBook.bookColor : '#3366CC',
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 flex">
            <div className="w-1/2 pr-8">
                {foundBook && (
                    <img src={foundBook.image} alt={foundBook.bookName} className="w-full h-auto" />
                )}
            </div>
            <div className="w-1/2">
                {foundBook ? (
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <h1 className="text-2xl font-semibold mb-2">{foundBook.bookName}</h1>
                        <p className="text-gray-700 mb-2">by {foundBook.author}</p>
                        <p className="text-gray-700 mb-2 font-bold">{foundBook.category}</p>
                        <p className="text-gray-700 mb-2">{foundBook.review.comments}</p>
                        <div className="flex flex-wrap mb-2">
                            {foundBook.tags.map((tag, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                            ))}
                        </div>
                        <p className="text-gray-700 mb-2">Number of Pages: {foundBook.totalPages} Pages</p>
                        <p className="text-gray-700 mb-2">Publisher :{foundBook.publisher}</p>
                        <p className="text-gray-700">Year of Publishing: {foundBook.yearOfPublishing}</p>
                        <p className="text-gray-700">Rating: {foundBook.rating}</p>
                        <div className="flex mt-4">
                        <button onClick={() => handleReadButtonClick(foundBook)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
    Read
</button>
<button onClick={() => handleWishlistButtonClick(foundBook)} disabled={isBookRead} style={wishlistButtonStyle} className={`text-white font-bold py-2 px-4 rounded ${isBookRead && 'opacity-50 cursor-not-allowed'}`}>
    Wishlist
</button>
                        </div>
                    </div>
                ) : (
                    <p className="text-red-500">Book not found!</p>
                )}
            </div>
        </div>
    );
};

export default DetailsBook;
