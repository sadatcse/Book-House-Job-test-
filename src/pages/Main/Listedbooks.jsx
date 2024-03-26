import React, { useState, useEffect } from 'react';

const Listedbooks = () => {
    const [listedBooks, setListedBooks] = useState([]);
    const [wishlistBooks, setwishlistBooks] = useState([]);
    const [Showdata, setShowdata] = useState([]); 
 



    

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('bookData')) || {};
        const storedData2 = JSON.parse(localStorage.getItem('wishlistData')) || {};
        const books = Object.values(storedData);
        const books2 = Object.values(storedData2);
        const combinedBooks = books.concat(books2);
        setListedBooks(combinedBooks);
    

    }, []); 
    console.log(listedBooks);

    function handleItemClick(item) {
        if (item === 1) {
            const sortedBooks2 = [...listedBooks].sort((a, b) => b.rating - a.rating);
            setListedBooks(sortedBooks2);
        } else if (item === 2) {
            const sortedBooks2 = [...listedBooks].sort((a, b) => a.totalPages - b.totalPages);
            setListedBooks(sortedBooks2);
        } else if (item === 3) {
            const sortedBooks2 = [...listedBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setListedBooks(sortedBooks2);
        }
    }




    return (
        <div>
<div className="flex justify-center">
  <div className='flex items-center'>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
      <ul tabIndex={0} className="dropdown-content z-[5] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a onClick={() => handleItemClick(1)}>Rating</a></li>
        <li><a onClick={() => handleItemClick(2)}>Number of pages</a></li>
        <li><a onClick={() => handleItemClick(3)}>Publisher year</a></li>
      </ul>
    </div>
  </div>
</div>

<div>
<div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    
  <div>
  <ul>
  {listedBooks
    .filter(book => book.status === "read")
    .map((book, index) => (
      <li key={index}>
        <div className="card card-side bg-base-100 shadow-xl mb-5">
          <figure><img className='h-64 w-32' src={book.image} alt="Book"/></figure>
          <div className="card-body">
            <h2 className="card-title">{book.bookName}</h2>
            <p>{book.author}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">details</button>
            </div>
          </div>
        </div>
      </li>
    ))}
</ul>
        </div>
    
</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    
  <div>
       
  <ul>
  {listedBooks
    .filter(book => book.status === "list")
    .map((book, index) => (
      <li key={index}>
        <div className="card card-side bg-base-100 shadow-xl mb-5">
          <figure><img className='h-64 w-32' src={book.image} alt="Book"/></figure>
          <div className="card-body">
            <h2 className="card-title">{book.bookName}</h2>
            <p>{book.author}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">details</button>
            </div>
          </div>
        </div>
      </li>
    ))}
</ul>
        </div>
    </div>


</div>

</div>


        </div>



    );
};

export default Listedbooks;
