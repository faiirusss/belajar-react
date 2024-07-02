import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { children } = props;
  return (
    <div className="relative block shadow-2xl overflow-hiddengroup">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { url, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={url}
        alt="product"
        className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
      />
    </Link>
  );
};

const Body = (props) => {
  const { title, children, price } = props;
  return (
    <div className="relative px-6 pt-6 bg-white">
      <span className="whitespace-nowrap bg-teal-600 px-3 py-1.5 text-xs font-medium text-white rounded-sm">
        {" "}
        New{" "}
      </span>
      <h3 className="mt-4 font-medium text-gray-600 truncate text-md">
        {title}
      </h3>
      <p className="mt-1.5 text-md font-semibold text-gray-900">Rp.{price}</p>
      <p className="flex items-center gap-1">
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        {children}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { handleAddToWishlist, id } = props;
  return (
    <div className="relative flex justify-end p-6">
      <button
        onClick={() => handleAddToWishlist(id)}
        className="absolute bottom-0 z-10 p-3 text-gray-900 transition end-0 "
      >
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
