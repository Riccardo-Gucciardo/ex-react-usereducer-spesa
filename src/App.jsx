import { useState } from "react";

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function app() {
  const [ addToCart, setAddToCart] = useState([])
  
}

const addToCart = (products) => {
  const isAlreadyInCart = addToCart.some((item) => item.name === products.name)
  if(!isAlreadyInCart){
    setAddToCart([...addToCart, {...products,quantity : 1}])
  }
}


function App() {
    const [ addToCart, setAddToCart] = useState([])

    const aggingiAlCarrello = (products) => {
  const isAlreadyInCart = addToCart.some((item) => item.name === products.name)
  if(!isAlreadyInCart){
    setAddToCart([...addToCart, {...products,quantity : 1}])
  }

}
  return (
    <div className="app">
      <h1>Lista Prodotti</h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <span>{product.name}</span>
            <span>€{product.price.toFixed(2)}</span>
            <button onClick={() => aggingiAlCarrello(product)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>

      <div className="cart">
        <h2>Carrello</h2>
        <ul className="cart-list">
          {addToCart.map((product, index) => (
            <li key={index} className="cart-item">
              <span>{product.name}</span>
              <span>{product.price.toFixed(2)}</span>
              <span>quantity: {product.quantity}</span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;