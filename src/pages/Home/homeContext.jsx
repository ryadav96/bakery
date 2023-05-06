import { useContext, useReducer, createContext } from "react";

const HOME_INITIAL_STATE = {
  cart: [],
  products: [],
  cartOpen: false,
};

const HomeContext = createContext();

const homeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const prevCart = state.cart;
      const existingItem = prevCart.find((item) => item.id === product.id);
      let newCart = [];
      if (existingItem) {
        newCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      const prevCart = state.cart;
      const existingItem = prevCart.find((item) => item.id === product.id);
      let newCart = [];
      if (existingItem && existingItem.quantity > 1) {
        newCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        newCart = prevCart.filter((item) => item.id !== product.id);
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case "TOGGLE_CART":
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

function HomeProvider({ ...props }) {
  const [state, dispatch] = useReducer(homeReducer, HOME_INITIAL_STATE);

  const value = [state, dispatch];
  return <HomeContext.Provider value={value} {...props} ></HomeContext.Provider>;
}

function useProduct() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error(`useProduct must be used within a HomeProvider`);
  }
  return context;
}

export { HomeProvider, useProduct };
