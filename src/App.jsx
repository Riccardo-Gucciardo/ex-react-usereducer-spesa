import { useState } from 'react';


const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const isAlreadyInCart = addedProducts.find((item) => item.name === product.name);
    if (isAlreadyInCart) {
      // Se il prodotto è già nel carrello, incrementa la quantità
      updateProductQuantity(product.name, isAlreadyInCart.quantity + 1);
    } else {
      // Se non è nel carrello, aggiungilo con quantità 1
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }
  };

  const updateProductQuantity = (productName, newQuantity) => {
    setAddedProducts(
      addedProducts.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productName) => {
    setAddedProducts(addedProducts.filter((item) => item.name !== productName));
  };

  const calculateTotal = () => {
    return addedProducts
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="app">
      <h1>Lista Prodotti</h1>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <span>{product.name}</span>
            <span>€{product.price.toFixed(2)}</span>
            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>

      <div className="cart">
        <h2>Carrello</h2>
          <>
            <ul className="cart-list">
              {addedProducts.map((product, index) => (
                <li key={index} className="cart-item">
                  <span>{product.name}</span>
                  <span>€{product.price.toFixed(2)}</span>
                  <span>Quantità: {product.quantity}</span>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.name)}
                  >
                    Rimuovi dal carrello
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <strong>Totale: €{calculateTotal()}</strong>
            </div>
          </>
      </div>
    </div>
  );
}

export default App; 