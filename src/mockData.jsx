// Productos de simulacion
export const products = [
  { id: "1", name: "Sahumerios", price: 500, category: "aromas", stock: 15, img: "/img/sahumerios.jpg" },
  { id: "2", name: "Cuarzo Rosa", price: 1500, category: "piedras", stock: 8, img: "/img/cuarzo.jpg" },
  { id: "3", name: "Libro de Reiki", price: 3500, category: "libros", stock: 5, img: "/img/libro.jpg" },
  { id: "4", name: "Amatista", price: 2000, category: "piedras", stock: 10, img: "/img/amatista.jpg" }
];

// Simula delay de servidor
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 600);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 600);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
     setTimeout(() => {
      const found = products.find(p => p.id === id);
      resolve(found ?? null); // devolvemos null si no existe
    }, 600);
   });
 };
