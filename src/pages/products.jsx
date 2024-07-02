import Button from "../components/Elements/Button";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/products";
import ProductCard from "../components/Fragments/ProductCard";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const ProductPage = () => {
  // const [totalPrice, setTotalPrice] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const whislistRef = useRef(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const handleAddToWishlistRef = (id) => {
    whislistRef.current = [...whislistRef.current, id];
    localStorage.setItem("wishlist", JSON.stringify(whislistRef.current));
  };

  const handleAddToWishlist = (id) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);

  // // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  return (
    <>
      {/* navbar */}
      <header className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, {username}!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's buy some products! 🎉
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                to={"/wishlist"}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> wishlist </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
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
              </Link>

              <button
                className="block px-5 py-3 text-sm font-medium text-white transition bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* end navbar */}

      <div className="flex max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductCard.Header url={product.image} id={product.id} />
                <ProductCard.Body
                  title={product.title}
                  price={product.price}
                  id={product.id}
                >
                  {product.rating["rate"]}
                </ProductCard.Body>
                <ProductCard.Footer
                  id={product.id}
                  handleAddToWishlist={handleAddToWishlistRef}
                />
              </ProductCard>
            ))}
        </div>

        {/* product card */}
        {/* <div className="flex flex-wrap w-4/6">
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
        </div> */}
        {/* end product card */}

        {/* cart */}
        {/* <div className="w-2/6">
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
        </div> */}
        {/* end cart */}
      </div>

      {/* classles version */}
      {/* <div className="flex justify-center w-100">
        <Counter></Counter>
      </div> */}
    </>
  );
};

export default ProductPage;
