/* Important Theritical Concepts: Looks like you can have multiple states comming 
    out of here!!
*/

/* So, we have to understand that There are 2 types of minipulation we are dealing with here
    1. We want the ability to access state from whereever
    2. We want to be able to eleganlt change the state of diffect valuew!! 
        - This may be kinda tricky, because what if we want to change the quatity property
          of one of the products that are in the cart object?
*/
import { createContext, useState, useReducer } from "react";

export const GlobalContext = createContext();
/* Now, these reducers would be imported from another file
we have it here now just to practice!
*/

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    }
    case "UPDATE_CART_ITEM": {
      return {
        ...state,
        cart: action.payload
      };
    }
    // case "UPDATE_ITEM": {
    //     return {
    //         ...state,
    //         cart:
    //     }
    // }
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const initialState = {
    products: [
      {
        id: 1,
        img: "/images/item-img-1-1.jpg",
        price: 149,
        title: "wooden chair",
        text: "Lorem ipsum dolor sit amet"
      },
      {
        id: 2,
        img: "/images/item-img-1-2.jpg",
        price: 248,
        title: "wooden chair",
        text: "Lorem ipsum dolor sit amet"
      },
      {
        id: 3,
        img: "/images/item-img-1-3.jpg",
        price: 299,
        title: "wooden chair",
        text: "Lorem ipsum dolor sit amet"
      },
      {
        id: 4,
        img: "/images/item-img-1-7.jpg",
        price: 299,
        title: "wooden chair",
        text: "Lorem ipsum dolor sit amet"
      }
    ],
    cart: []
  };
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  // const [cart, setCart] = useState({name: "Nivea", price: 4.99})
  // const [ products, setProducts ] = useState({name: "Apollos", age: 21})
  // const [newCart, setnewCart] = useState({name: "Nivea", price: 4.99})
  // const [state, dispatch] = useReducer(GlobalReducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        dispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

/* Now, how do we access the Cart State? */
