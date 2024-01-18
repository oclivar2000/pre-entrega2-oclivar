import React, { useEffect, useState } from 'react';
import Data from './Item.json';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState(Data);

  useEffect(() => {
    const filteredItems = items.filter(item => item.id === categoryId);
    setItems(filteredItems);
  }, [categoryId]);

  return (
    <div>
      <NavBar categoryId={categoryId} />
      <ul>
        {items.map(item => (
          <li key={item.id}>Nombre: {item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;