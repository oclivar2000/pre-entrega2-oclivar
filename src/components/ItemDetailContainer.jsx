import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './Item.json'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {
   const {id}= useParams()
   const [item, setItem]=useState()

   useEffect(()=>{
    const searchItem = data.find(item=>item.id===parseInt(id, 10))
    setItem(searchItem)
   },[id])
if (!item){
return <div>cargando ...</div>
}
  return (
    <div>
      <Link to ="/">
      <button>Volver a Home</button>
      </Link>
      <h1>Detalle del Item</h1>
      <p>{item.nombre}</p>
      <img src={item.imagenDetalle} alt="Imagen " />
    </div>
  )
}

export default ItemDetailContainer
