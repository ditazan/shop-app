import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
// destructuring provider component from createContext Context obj
const { Provider } = StoreContext;

//instantiate our initial global state with the useProductReducer()
const StoreProvider = ({ value = [], ...props }) => {
  // returns : state (most up-to-date version of our global state object)  + dispatch (method we execute to update our state. looks for an action object passed in as its argument)
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
  });
  // use this to confirm it works!
  // then return the StoreContext's <Provider> component with our state object and dispatch the function provided as data for the value prop.
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

// custom React Hook
// any component that has access to our StoreProvider component can use any data in our global state container or update it using the dispatch function
const useStoreContext = () => {
  return useContext(StoreContext);
};



export { StoreProvider, useStoreContext };
