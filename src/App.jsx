import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  // ‘/’ navega a <ItemListContainer />
  // ‘/category/:id’  <ItemListContainer />
  // ‘/item/:id’ navega a <ItemDetailContainer />
  
  return (
    <>

    <Routes>
      <Route path='/'  element={<ItemListContainer />}/>
      <Route path='/category/:categoria'  element={<ItemListContainer />}/>
      <Route path='/item/:id'  element={<ItemDetailContainer />}/>
    </Routes>
 </>
  )
}

export default App
