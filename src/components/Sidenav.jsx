import React from 'react'
import './Sidenav.css'

function Sidenav() {
  return (
    <div className='side'>
<div className='logo'>  <i class="fa-brands fa-spotify fa-2xl"></i> <h3>Spofity</h3></div>
<div className='side-button'>
    <button className='sign'>Sign up</button>
    <button className='login'>Login </button>
</div>

    </div>
  )
}

export default Sidenav