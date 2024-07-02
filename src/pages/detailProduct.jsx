import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProducts } from "../services/products";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProducts(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-100">
      <Link to={'/products'} 
        className="block px-5 py-3 text-sm font-medium text-white transition bg-yellow-400 rounded"
      >
        back
      </Link>
      {Object.keys(product).length > 0 && (
        <div className="flex max-w-xl font-sans">
          <div className="relative flex-none w-48">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {product.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                $ {product.price}
              </div>
              <div className="flex-none w-full mt-2 text-sm font-medium text-slate-700">
                Review {product.rating.rate}/5 ({product.rating.count})
              </div>
            </div>
            <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">
              <div className="flex space-x-2 text-sm">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="flex mb-6 space-x-4 text-sm font-medium">
              <div className="flex flex-auto space-x-4">
                <button
                  className="h-10 px-6 font-semibold text-white bg-black rounded-md"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold border rounded-md border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;
