const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 },
  { id: 4, name: 'Watch', price: 299 },
];
function ProductList() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <h2>Total: ${products.reduce((sum, p) => sum + p.price, 0)}</h2>
    </div>
  );
}
export default ProductList;
