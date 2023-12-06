import { useSearchParams } from "react-router-dom";
import { useProductList } from "../hooks/useProductList";
import { Pagination } from "@mui/material";
import { generateURL } from "../utils/generateUrl";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export const currenyFormatter = (price: number): string => {
  const currency = Intl.NumberFormat("en-US", {
    currency: "PHP",
    style: "currency",
  });
  return currency.format(price);
};

const ProductsGrid: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ? parseInt(searchParams.get("page") as string) : 1;
  const { data: products, isLoading, isSuccess } = useProductList(currentPage);
  const skeletonCount = Array(8).fill(null);

  const handlePageChange = (_: any, page: number): void => {
    setSearchParams({ page: String(page) });
  };

  return (
    <div className="flex flex-col mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2 mt-6 auto-rows-max">
        {isSuccess &&
          products.data.map((product) => (
            <ProductCard
              key={product.product_name}
              id={product.product_id}
              imageUrl={generateURL(product.image.data)}
              name={product.product_name}
              description={product.product_description}
              displayedPrice={currenyFormatter(parseInt(product.price))}
              quantity={product.quantity}
            />
          ))}
        {isLoading && skeletonCount.map((_, i) => <ProductSkeleton key={i} />)}
      </div>
      {isSuccess && (
        <div className="flex items-center justify-center py-8">
          <Pagination onChange={handlePageChange} count={products.totalPages}></Pagination>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
