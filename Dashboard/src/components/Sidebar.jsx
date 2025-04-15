import React from 'react'

import {Link} from 'react-router-dom';

export default function sidebar() {
  return (
    <div className='w-64 h-screen bg-gray-800 text-white text-2xl p-4'>
        <h2 className="text-xl mb-4">Admin Panel</h2>
        <nav>
            <Link to="/" className="block py-2 hover:bg-gray-700">Dashboard</Link>
            <Link to="/users" className="block py-2 hover:bg-gray-700">Users</Link>
            <Link to="/settings" className="block py-2 hover:bg-gray-700">Settings</Link>
        </nav>




    </div>
  )
}
