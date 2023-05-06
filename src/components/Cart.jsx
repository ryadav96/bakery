import { useProduct } from "../pages/Home/homeContext";

const Cart = () => {
  const [state, dispath] = useProduct();

  const { cart } = state;

  const addToCart = (product) => {
    dispath({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispath({ type: "REMOVE_FROM_CART", payload: product });
  };

  const total = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
console.log("render");
  return (
    <div className="bg-white">
      <div className="p-4">
        <ul className="space-y-2">
          {cart.map((product) => (
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p className="ml-4">
                      {(product.quantity * product.price).toFixed(2)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Qty {product.quantity}</p>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      className=" rounded-md  font-[25px] text-indigo-600 hover:text-indigo-500 "
                      onClick={() => addToCart(product)}
                    >
                      + Add
                    </button>
                    <button
                      type="button"
                      className=" rounded-md  font-[25px] text-indigo-600 hover:text-indigo-500 "
                      onClick={() => removeFromCart(product)}
                    >
                      - Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-700 font-medium">Total:</p>
          <p className="text-gray-700 font-medium">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;