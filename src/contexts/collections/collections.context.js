import { createContext } from "react";
import SHOP_DATA from "./shop.data";

// Create a new context called CollectionsContext and store SHOP_DATA
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
