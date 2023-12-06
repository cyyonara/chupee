import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "../hooks/useDebounce";
import { generateURL } from "../utils/generateUrl";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Product } from "../types/t_product";

const SearchInput: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(searchKeyword);
  const { data, isSuccess } = useSearch(debouncedKeyword);
  const [results, setResults] = useState<Product[]>([]);
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setSearchKeyword("");
  }, [id]);

  useEffect(() => {
    if (isSuccess) setResults(data!.data);

    if (!searchKeyword) setResults([]);
  }, [isSuccess, searchKeyword]);

  return (
    <form className="hidden sm:flex border p-1 w-full max-w-[850px] relative">
      <input
        type="text"
        className="outline-none text-gray-700 w-0 flex-1 text-sm px-2 rounded-sm"
        placeholder="Search for products..."
        value={searchKeyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-c-black px-6 py-2 rounded-sm duration-150 hover:bg-c-black/90 active:bg-c-black/80"
      >
        <IoIosSearch color="white" className="text-xl" />
      </button>
      <div className="top-[105%] absolute inset-x-0 rounded-sm">
        {isSuccess &&
          debouncedKeyword &&
          results.map((product) => (
            <div
              className="bg-white flex h-[60px] px-4 py-2 items-center border-b cursor-pointer gap-x-6 last:border-none"
              onClick={() => {
                navigate(`/products/${product.product_id}`);
              }}
            >
              <img
                src={generateURL(product.image.data)}
                alt={product.product_name}
                className="h-[40px] w-[40px] object-contain"
              />
              <span className="line-clamp-1">{product.product_name}</span>
            </div>
          ))}
      </div>
    </form>
  );
};

export default SearchInput;
