import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {


  const location = useLocation()
  useEffect(() => {
    // re-render Navbar when url changes
  }, [location.pathname])

  return (
    <nav className='navbar is-dark'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/'>
            <span role='img' aria-label='logo' className='title'>
              Ω
            </span>
          </Link>
        </div>
        < div className='navbar-start'>
          <Link to='/family-tree' className='navbar-item'>
            Family Tree
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
