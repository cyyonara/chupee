import { useProductList } from "../hooks/useProductList";
import { generateURL } from "../utils/generateUrl";
import { useParams } from "react-router-dom";
import { currenyFormatter } from "./ProductsGrid";
import { useNavigate, NavigateFunction } from "react-router-dom";

const Recommended: React.FC = () => {
  const { data, isLoading, isSuccess } = useProductList(1);
  const { id } = useParams();

  const navigate: NavigateFunction = useNavigate();

  const filteredProducts = data?.data.filter(
    (product) => product.product_id !== parseInt(id as string)
  );

  return (
    <div className="flex flex-col max-w-[1400px] mx-auto w-full border-t border-gray-300 mt-8 pt-6 mb-16">
      <span className="text-gray-500">Recommended for you</span>
      {isSuccess && (
        <div className="grid grid-cols-6 gap-1 mt-1">
          {filteredProducts!.map((product) => (
            <div
              key={product.product_name}
              className="flex flex-col rounded-b-sm bg-white gap-y-2 cursor-pointer"
              onClick={() => navigate(`/products/${product.product_id}`)}
            >
              <div className="h-[200px]">
                <img
                  src={generateURL(product.image.data)}
                  alt={product.product_name}
                  className="object-contain object-center h-full w-full"
                />
              </div>
              <div className="flex flex-col text-gray-600 p-2 gap-y-4 mt-auto">
                <span className="text-sm line-clamp-2">{product.product_name}</span>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-green-600">
                    {currenyFormatter(parseInt(product.price))}
                  </span>
                  <span className="text-sm">({product.quantity})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommended;
