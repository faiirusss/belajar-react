import React, { useState, useEffect } from "react";
import { getProducts } from "../services/products";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlists(savedWishlist);
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      wishlists.includes(product.id)
    );
    setItems(filteredProducts);
  }, [wishlists, products]);

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 mb-2 text-xs text-gray-600">
          <li>
            <Link
              to={"/products"}
              className="block transition hover:text-gray-700"
            >
              {" "}
              Products{" "}
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700">
              {" "}
              Wishlist{" "}
            </a>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-bold text-gray-900 sm:text -3xl">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-4 lg:gap-8">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="relative block overflow-hidden group" key={item.id}>
              <img
                src={item.image}
                alt=""
                className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="relative p-6 bg-white border border-gray-100">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                  {" "}
                  New{" "}
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900 truncate">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-700">${item.price}</p>

                <form className="flex justify-between gap-3 mt-4">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    type="button"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 border rounded-md border-slate-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="gray"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M6 12h.01m6 0h.01m5.99 0h.01"
                      />
                    </svg>
                  </button>
                  <button className="w-full p-1 text-xs font-medium text-teal-600 transition border border-teal-600 rounded">
                    + Add to Cart
                  </button>
                </form>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
