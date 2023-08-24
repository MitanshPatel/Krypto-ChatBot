import React from 'react'
import { Link} from 'react-router-dom'
import nc from '../astylus/Nav.module.css'

function Navbar() {
  return (
    <div className={nc.navbar}>
      <i className="fa-solid fa-robot fa-xl"></i>
      <Link to='/'>Krypto Bot</Link>
    </div>
  )
}

export default Navbar
