import React from 'react';
import Data from './../../../public/Data.json';
import { redirect } from "react-router-dom";



const Cards = () => {

    const handleClick  = (id) => {
        console.log(id);
        window.location.href = `/book/${id}`;
    };

    console.log(Data);
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Books to freshen up your bookshelf</h1>
           
            <div className='m-5 grid grid-cols-3 gap-8'>
                {Data.slice(0, 6).map(book => (
                     <a onClick={() => handleClick(book.bookId)}>
                    <div  key={book.bookId} className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
                        <figure>
                            <img src={book.image} alt={book.bookName} className="w-full h-64 object-cover" />
                        </figure>
                        <div className="card-body p-6">
                        <div className="flex justify-items-start items-center">
                        {book.tags.map(tag => (
                                        <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                                    ))}
                        </div>

                        <div>
                        <h2 className="card-title text-3xl font-semibold text-gray-800 mb-2">{book.bookName}</h2>
                        <p className="text-gray-600 mb-4 text-start">by {book.author}</p>
                            
                            </div>  
                    
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.category}</span>
                              
                                </div>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.rating}</span>
                            </div>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
    

        </div>
    );
};

export default Cards;