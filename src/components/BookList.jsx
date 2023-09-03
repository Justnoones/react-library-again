import React from 'react'
import gojo from '../assets/download.jpg';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { deleteDoc, doc } from 'firebase/firestore';
import db from '../firebase';

export default function BookList ({book}) {
  let { isDark } = useTheme();
  let navigate = useNavigate();

  let deleteHandler = async (e, id) => {
    e.preventDefault();
    let ref = doc(db, "books", id);
    deleteDoc(ref);
  }

  let editHandler = (e, id) => {
    e.preventDefault();
    navigate(`edit/${id}`);
  }


  return (
    <Link to={`books/${book.id}`} className={`min-h-[470px] border-2 shadow-sm text-center space-y-2 ${isDark && "border-primary"}`}>
        <div>
            <img src={gojo} className='w-full h-full' alt={"gojo"} />
        </div>
        <h1 className={`text-lg font-bold ${isDark && "text-white"}`}>{book.title}</h1>
        <p className={`${isDark && "text-white"}`}>{book.description}</p>
        <div className='d flex flex-wrap gap-2 p-4'>
            {book.categories.map(category => (
            <span key={category} className='text-sm text-white bg-indigo-500 px-2 py-1 rounded-md'>{category}</span>
            ) )}
        </div>
        <div className='grid grid-cols-2'>
              <button className='px-2 py-1 bg-red-500 text-white rounded-lg' onClick={e => deleteHandler(e, book.id)}>Delete</button>
              <button className='px-2 py-1 bg-yellow-500 text-black rounded-lg' onClick={e => editHandler(e, book.id)}>Edit</button>
        </div>
    </Link>
  )
}
