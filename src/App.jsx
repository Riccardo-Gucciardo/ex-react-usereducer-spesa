const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function App() {
  return (
    <div className="app">
      <h1>Lista Prodotti</h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <span>{product.name}</span>
            <span>€{product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;