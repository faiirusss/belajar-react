import React from "react";
import Button from "../Elements/Button";

const ProductCard = (props) => {
  const { children } = props;
  return (
    <div className="card max-w-64 ms-5 mx-3 my-3 overflow-hidden rounded bg-white text-slate-500 flex justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { url } = props;
  return (
    <figure>
      <img src={url} alt="product" className="aspect-video w-full p-2" />
    </figure>
  );
};

const Body = (props) => {
  const { title, children, price } = props;
  return (
    <div className="p-6">
      <header className="mb-4">
        <h3 className="text-xl font-medium text-slate-700 line-clamp-2">
          {title}
        </h3>
        <p className=" text-slate-400">{price}</p>
      </header>
      <p className="line-clamp-3">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { handleAddToCart, id } = props;
  return (
    <div className="flex justify-end p-6 pt-0">
      <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>Order now!</span>
      </button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;

// export default function CardEcommerce() {
//   return (
//     <>
//       {/*<!-- Component: E-commerce card --> */}
//       <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
//         {/*  <!-- Image --> */}
//         <figure>
//           <img
//             src="https://picsum.photos/id/493/800/600"
//             alt="card image"
//             className="aspect-video w-full"
//           />
//         </figure>
//         {/*  <!-- Body--> */}
//         <div className="p-6">
//           <header className="mb-4">
//             <h3 className="text-xl font-medium text-slate-700">
//               Greek breakfast
//             </h3>
//             <p className=" text-slate-400"> $8.99</p>
//           </header>
//           <p>
//             Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries +
//             Granola + Honey.
//           </p>
//         </div>
//         {/*  <!-- Action base sized basic button --> */}
// <div className="flex justify-end p-6 pt-0">
//   <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
//     <span>Order now!</span>
//   </button>
// </div>
//       </div>
//       {/*<!-- End E-commerce card --> */}
//     </>
//   );
// }
