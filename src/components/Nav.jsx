import React from 'react'

import './nav.css'
import { NavLink, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <div style={{display:'flex'}} className='nav-bar'>
    <div className='nav'>

     <div >
         <NavLink to='/' style={{marginTop:'20px'}}>  <h4 className='H4'>Home</h4></NavLink>
         <NavLink style={{marginTop:'100px'}} to="/search">  <h4 className='H4'>Search</h4></NavLink>
         <h4 className='H4'> Your library</h4>
       <div>
         <h4 className='H4'>create palylist</h4>
           <h4 className='H4'>like songs</h4>
       </div>
    </div>
     <div>
     <Outlet/>
     </div>
    </div>
    </div>
  )
}

export default Nav