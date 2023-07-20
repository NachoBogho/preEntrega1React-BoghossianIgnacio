import React from 'react'

const SideBar = () => {
  return (
   
   
        <div className='sideNavBar'>
         <div className='navBarLinks'>
            <a href="" className="navBarA"><i class="bi bi-graph-up"></i>  Stats</a>
            <a href="" className="navBarA"><i class="bi bi-currency-bitcoin"></i>  Crypto</a>
             <a href="" className="navBarA"><i class="bi bi-info-circle"></i>  Help</a>
        </div>
        <div className='navBarUser'>
            <a href="" className="navBarData"><i class="bi bi-door-open"></i>  LogIn/Register</a>
            <a href="" className="navBarData"><i className="bi bi-gear-wide-connected"></i>  Settings</a>
        </div>
      </div>

  )
}

export default SideBar