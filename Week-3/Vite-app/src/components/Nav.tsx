import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <ul>
        <li> <Link to='/'>Home </Link> </li>
        <li><Link to='/about'>About </Link> </li>
        <li><Link to='/product'> Product - routing,useState,mapping </Link> </li>
        <li><Link to='/reducer'> useReducer </Link> </li>
    </ul>
  )
}

export default Nav