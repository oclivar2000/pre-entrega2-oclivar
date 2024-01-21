// import React, { useEffect, useState } from 'react';
// import Data from './Item.json';
// import { useParams } from 'react-router-dom';
// import NavBar from './NavBar';
// import { Link } from 'react-router-dom';
// import './ItemListContainer.css';

// const ItemListContainer = () => {
//   const { categoria } = useParams();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const filteredItems = categoria
//     ?Data.filter(item=>item.categoria===categoria)
//     :Data
//     setItems(filteredItems)
//   }, [categoria]);

//   return (
//     <div className="container">
//       <Link to ="/">
//       <button>Volver a Home</button>
//       </Link>
//       <NavBar  />
//       <ul>
//         {items.map(item => (
//           <div  key={item.id}>
//           <p>
//             <Link to={`/item/${item.id}`}>item: {item.nombre}</Link>
//           </p>
//           <li><img src={item.imagenCategoria} alt="Img categoria" /></li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ItemListContainer;




// // import React, { useEffect, useState } from 'react';
// // import Data from './Item.json';
// // import { useParams } from 'react-router-dom';
// // import NavBar from './NavBar';
// // import { Link } from 'react-router-dom';

// // // Importa el archivo CSS
// // import './ItemListContainer.css';

// // const ItemListContainer = () => {
// //   const { categoria } = useParams();
// //   const [items, setItems] = useState([]);

// //   useEffect(() => {
// //     const filteredItems = categoria ? Data.filter(item => item.categoria === categoria) : Data;
// //     setItems(filteredItems);
// //   }, [categoria]);

// //   return (
// //     <div className="container">
// //       <Link to="/">
// //         <button>Volver a Home</button>
// //       </Link>
// //       <NavBar />
// //       <ul>
// //         {items.map(item => (
// //           <div className="item-container" key={item.id}>
// //             <p>
// //               <Link to={`/item/${item.id}`}>item: {item.nombre}</Link>
// //             </p>
// //             <li>
// //               <img src={item.imagenCategoria} alt="" />
// //             </li>
// //           </div>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default ItemListContainer;



import React, { useEffect, useState } from 'react';
import Data from './Item.json';
import { useParams, Link } from 'react-router-dom';
import NavBar from './NavBar';

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Obtener categorías únicas de los productos
    const uniqueCategories = Array.from(new Set(Data.map(item => item.categoria)));
    setCategories(uniqueCategories);

    // Filtrar productos por categoría si está especificada
    const filteredItems = categoria ? Data.filter(item => item.categoria === categoria) : [];
    setItems(filteredItems);
  }, [categoria]);

  return (
    <div>
      <Link to="/">
        <button>Volver a Home</button>
      </Link>
      <NavBar />
      
      {/* Mostrar solo las categorías en la ruta '/' */}
      {categoria === undefined && (
        <ul>
          {categories.map(category => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* Mostrar la lista de productos si hay una categoría especificada */}
      {categoria !== undefined && (
        <ul>
          {items.map(item => (
            <div key={item.id}>
              <p>
                <Link to={`/item/${item.id}`}>item: {item.nombre}</Link>
              </p>
              <li>
                <img src={item.imagenCategoria} alt="" />
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemListContainer;
