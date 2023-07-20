import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return(
      <>
      <NavBar></NavBar>
      <ItemListContainer greeting='Welcome to Swift Sell'/>
      
      </>
  )
}
export default App