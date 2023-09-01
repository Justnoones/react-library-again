import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import { useLocation } from 'react-router-dom';
import db from '../firebase/index';
import { collection, getDocs } from 'firebase/firestore';

export default function BookLists () {
  
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let searchValue = param.get('q');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [books, setBooks] = useState("");
  useEffect(() => {
    let ref = collection(db, 'books');
    getDocs(ref)
      .then(docs => {
        let books = [];
        docs.forEach(doc => {
          let book = {
            id : doc.id,
            ...doc.data()
          }
          books = [...books, book];
        })
        setBooks(books);
      })
  }, [])
  
  return (
    <>
        {error && <p className={`text-center text-2xl font-bold text-gray-700 mt-5`}>Failed To Fetch.</p>}
        {!error && loading && <p className={`text-center text-2xl font-bold text-gray-700 mt-5`}>Loading...</p>}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-5'>
            {books && books.map(book => (
              <BookList key={book.id} book={book} />
            ))}
        </div>
        {books && books.length < 1 && <p className={`text-center text-2xl font-bold text-gray-700`}>No Records Found.</p>}
    </>
  )
}
