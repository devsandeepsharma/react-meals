import { useState } from "react";

import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";
import Cart from "./componets/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
    <main>
      <Meals />
    </main>
    </>
  );
}

export default App;
