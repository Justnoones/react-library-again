import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

export default function Navbar() {
  let navigate = useNavigate();
  let [search, setSearch] = useState("");
  let searchBook = e => {
    e.preventDefault();
    navigate(`/?q=${search}`);
  }

  return (
    <nav className='border border-b-3'>
      <ul className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <li className='flex space-x-2 items-center text-center'>
          <button onClick={searchBook}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <form method='GET' onSubmit={searchBook}>
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" name='q' placeholder='Search something...' className='b outline-none px-2 py-1' />
          </form>
          <button onClick={searchBook} className='b bg-indigo-500 text-white px-2 py-1 rounded-lg md:text-lg'>Search</button>
        </li>
        <Link to="/" className='flex space-x-2 items-center md:-ml-12'>
          <h1 className='b text-2xl font-bold text-indigo-500 hidden md:block'>Book Store</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>
        </Link>
        <Link to="create" className='flex space-x-2 items-center'>
          <button className='flex space-x-2 items-center bg-indigo-500 rounded-xl px-2 py-1 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className='text-lg hidden md:block'>Create Book</span>
          </button>
          <div className='w-10'>
            <img src='https://i.pinimg.com/474x/40/3c/6e/403c6e5bd46ac212351fd80f63a9849f.jpg' className='w-full rounded-full' />
          </div>
        </Link>
      </ul>
    </nav>
  )
}