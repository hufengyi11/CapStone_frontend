import { createContext } from "react";

const BasketContext = createContext({
    items:[],
    setItems:()=>{}
});

export default BasketContext

// information store