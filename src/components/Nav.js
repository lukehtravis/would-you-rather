import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <div>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
      </div>
      <div>
          <NavLink to='/add' exact activeClassName='active'>
            Add Question
          </NavLink>
      </div>
      <div>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
      </div>
      <div>
          <NavLink to='/login' activeClassName='active'>
            Login
          </NavLink>
      </div>
    </nav>
  )
}
