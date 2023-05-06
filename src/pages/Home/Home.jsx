import { useEffect } from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { HomeProvider, useHome } from "./homeContext";
import allProducts from "../../data/product";

const HomePage = () => {
  const [state, dispath] = useHome();
  useEffect(() => {
    dispath({ type: "SET_PRODUCTS", payload: allProducts });
  }, []);

  const { products } = state;

  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-4">Our New Products</h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <HomeProvider>
      <HomePage />
    </HomeProvider>
  );
};

export default Home;
