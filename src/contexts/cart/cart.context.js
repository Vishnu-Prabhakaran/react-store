import { createContext } from "react";

const CartContext = createContext({
  // Object
  hidden: true,
  // Empty function
  toggleHidden: () => {}
});

export default CartContext;
