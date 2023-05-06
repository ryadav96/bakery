import { useState } from "react";
import PropTypes from "prop-types";

const Product = ({ product, addToCart, removeFromCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-base font-medium text-gray-900">{product.price}</p>
        </div>
        <div className="flex items-center justify-between">
          {/* <p className="text-gray-700 font-medium">
            ${product.price.toFixed(2)}
          </p>
          {isHovered ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={handleRemoveFromCart}
              >
                Remove from cart
              </button>
            </>
          ) : null} */}
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
