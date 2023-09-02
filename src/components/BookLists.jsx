import React, { useEffect } from 'react';
import BookList from './BookList';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import db from '../firebase';

export default function BookLists () {
  
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let searchValue = param.get('q');

  let [ books, setBooks ] = useState([]);
  let [ error, setError ] = useState(false);
  let [ loading, setLoading ] = useState(false);

  useEffect(() => {
    let ref = collection(db, "books");
    getDocs(ref).then(docs => {
      setLoading(true);
      if (docs.empty) {
        setError(true);
        setLoading(false);
      } else {
        let books = [];
        docs.forEach(doc => {
          let book = {id : doc.id, ...doc.data()};
          books.push(book);
        })
        setLoading(false);
        setError(false);
        setBooks(books);
      }
    })
  }, []);


  return (
    <>
        {error && <b>{error}</b>}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-5'>
            {loading && <p>loading...</p>}
            {books && books.map(book => (
              <BookList key={book.id} book={book} />
            ))}
        </div>
    </>
  )
}
