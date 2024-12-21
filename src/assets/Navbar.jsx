import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='border bg-gray-200 p-2'>
            <nav className='flex items-center h-10   justify-between w-9/12 m-auto font-bold'>
                <div>
                    <h1 className='text-2xl'>LITTER LIMON</h1>
                </div>
                <ul className='flex gap-8 items-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
