import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>Sobre</Link> */}
            <NavLink to='/'
            // className={({ isActive }) => (isActive ? 'esta-ativo' : 'não-ativo')}
            >Home</NavLink>
            <NavLink to='/products'>Produtos</NavLink>
            <NavLink to='/about'>Sobre</NavLink>
        </nav>
    )
}

export default Navbar