import cart from "../assets/cart.svg";
import Cart from "./Cart";
import { useProduct } from "../pages/Home/homeContext";

const Header = () => {
  const [state, dispath] = useProduct();

  const cartItems = state.cart;

  const isDrawerOpen = state.cartOpen;

  const toggleDrawer = () => {
    dispath({ type: "TOGGLE_CART" });
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="relative">
      <div className="h-24 w-full bg-[#f4efe7]">
        <button
          onClick={toggleDrawer}
          className="absolute top-5 right-10 h-12 w-12 flex items-center justify-center"
        >
          <img src={cart} alt="cart" className="h-8 w-8" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold rounded-full px-2">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-1/2 bg-white z-10 shadow-lg transition-transform duration-300 transform translate-x-0">
          <div className="overflow-auto h-full pb-[100px]">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
              {cartItems.length > 0 ? (
                <Cart />
              ) : (
                <p className="text-lg text-center">Your cart is empty</p>
              )}
            </div>
          </div>
          <div className="bg-white fixed bottom-0 left-0 w-full pb-[10px]">
            <button
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full"
              onClick={() => {
                console.log(state.cart);
              }}
            >
              Checkout
            </button>
            <button
              onClick={toggleDrawer}
              className="mt-2 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-full w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
