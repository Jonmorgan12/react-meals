import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);

  const showCartHandler = (): void => {
    setShowCart(true);
  };

  const hideCartHandler = (): void => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
