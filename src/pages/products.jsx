import Button from "../components/Elements/Button";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/products";
import ProductCard from "../components/Fragments/ProductCard";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      {/* navbar */}
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1
                className="text-2xl font-bold text-gray-900 sm:text
                -3xl"
              >
                Welcome Back, {username}!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's buy some products! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
                onClick={handleLogout}
              >
                <span className="text-sm font-medium"> Logout </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* end navbar */}

      <div className="flex justify-center py-20">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header url={product.image} id={product.id} />
                <ProductCard.Body title={product.title} price={product.price}>
                  {product.rating["rate"]}
                </ProductCard.Body>
                <ProductCard.Footer
                  id={product.id}
                  handleAddToCart={handleAddToCartRef}
                />
              </ProductCard>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-500">Cart</h1>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={item.id}>
                        <td>{product.title}</td>
                        <td>
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          {(product.price * item.qty).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                <tr ref={totalPriceRef}>
                  <td colSpan={3}>
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b>
                      {totalPrice.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* classles version */}
      {/* <div className="flex justify-center w-100">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductPage;
