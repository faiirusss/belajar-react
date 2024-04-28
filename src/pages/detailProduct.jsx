import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="flex justify-center min-h-screen items-center w-100">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans max-w-xl">
          <div className="flex-none w-48 relative">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
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
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                Review {product.rating.rate}/5 ({product.rating.count})
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
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
