import PropTypes from "prop-types";
import { useProduct } from "../pages/Home/homeContext";

const Product = ({ product }) => {
  const dispath = useProduct()[1];
  const addToCart = (product) => {
    dispath({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispath({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-center object-cover sm:w-full sm:h-full"
        />
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col">
        <h3 className="text-sm font-medium text-gray-900">
          <a>
            <span aria-hidden="true" />
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-base font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-full"
            onClick={handleAddToCart}
          >
            + Add
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded-full"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,

  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
