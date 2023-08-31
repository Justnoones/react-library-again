import React from 'react';
import useFetch from '../hooks/useFetch';
import BookList from './BookList';
import { useLocation } from 'react-router-dom';

export default function BookLists () {
  
  let location = useLocation();
  let param = new URLSearchParams(location.search);
  let searchValue = param.get('q');
  let url = `http://localhost:3000/Books${searchValue ? "?q="+searchValue : ""}`;
  let { data : books, loading, error } = useFetch(url);

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
