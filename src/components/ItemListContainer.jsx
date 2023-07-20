import React from 'react'
import '../components/ComponentsStyles.css'
import IndexBody from './IndexBody'
import SideBar from './SideBar'


const ItemListContainer = ({greeting}) => {
  return(
      <div className='bodyDisplay'>
        <SideBar/>
        <IndexBody/>
        <h1 className='greetingConfig'>{greeting}</h1>
        
      </div>
  )
}
export default ItemListContainer


