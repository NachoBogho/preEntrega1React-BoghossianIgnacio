import React from 'react'
import logo from '../assets/img/logo.jpg'
import '../components/ComponentsStyles.css'
import CartWidget from './CartWidget'


const NavBar = () => {
  return(
    
      <div className='containerNavbar'>
        <div className='navBarRow'>
          <div className='navBarLogo'>
            <a href="" className="navBarItem"><img src={logo} alt="Logo SwiftSell"/>  Swift Sell</a>
          </div>
          <div className='navBarRowItem'>
            <a href="" className="navBarItem"> Store</a>
            <a href="" className="navBarItem"> User</a>
            <CartWidget/>
          </div>  
        </div>
      </div>
  )
}
export default NavBar