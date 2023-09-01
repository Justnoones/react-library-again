import React from 'react'
import gojo from '../assets/download.jpg';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

export default function BookList ({book}) {
  let { isDark } = useTheme();
  return (
    <Link to={`books/${book.id}`} className={`min-h-[350px] border-2 shadow-sm text-center space-y-2 ${isDark && "border-primary"}`}>
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
    </Link>
  )
}
