import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoria' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
