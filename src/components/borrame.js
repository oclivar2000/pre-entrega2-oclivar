const fs = require('fs');

try {
  // Lee el contenido del archivo
  const jsonString = fs.readFileSync('item.json', 'utf-8');

  // Parsea la cadena JSON a un objeto JavaScript
  const productos = JSON.parse(jsonString);

  console.log(productos);
} catch (error) {
  console.error('Error al leer o analizar el archivo JSON:', error.message);
}
