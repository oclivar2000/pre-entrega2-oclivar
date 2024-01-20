import React, { useEffect, useState } from 'react';
import Data from './Item.json';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = categoria
    ?Data.filter(item=>item.categoria===categoria)
    :Data
    setItems(filteredItems)
  }, [categoria]);

  return (
    <div>
      <Link to ="/">
      <button>Volver a Home</button>
      </Link>
      <NavBar  />
      <ul>
        {items.map(item => (
          <div  key={item.id}>
          <p>
            <Link to={`/item/${item.id}`}>item: {item.nombre}</Link>
          </p>
          <li><img src={item.imagenCategoria} alt="" /></li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;