import Footer from "../components/Footer";
import Recommended from "../components/Recommended";
import Header from "../components/Header";
import ImagePreview from "../components/ImagePreview";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavigateFunction } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { AnimatePresence } from "framer-motion";
import { useProduct } from "../hooks/useProduct";
import { generateURL } from "../utils/generateUrl";
import { currenyFormatter } from "../components/ProductsGrid";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { BsCartPlus } from "react-icons/bs";
import { useAuthStore } from "../store/authStore";
import { useAddToCart } from "../hooks/useAddToCart";
import { toast } from "sonner";

const Product: React.FC = () => {
  const [showImagePreview, setShowImagePreview] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useProduct(parseInt(id as string));
  const { auth } = useAuthStore();
  const { mutate } = useAddToCart();
  const navigate: NavigateFunction = useNavigate();

  const handleAddToCart = (): void => {
    if (!auth) navigate("/login");
    mutate(
      { productId: data!.data.product_id, quantity },
      {
        onSuccess: () => {
          toast.success("Item has been added to your cart!", { position: "top-right" });
          setQuantity(1);
        },
      }
    );
  };

  const handleCheckout = (): void => {
    if (!auth) {
      navigate("/login");
    } else {
      navigate(`/checkout?products=${data!.data.product_id}/${quantity}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSuccess) {
      if (data.data.quantity > 0) {
        setQuantity(1);
      } else {
        setQuantity(0);
      }
    }
  }, [id, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      document.title = `${data.data.product_name} - Chupee`;
    }
  }, [isSuccess]);

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <Header />
        <AnimatePresence>
          {isSuccess && showImagePreview && (
            <ImagePreview
              link={generateURL(data.data.image.data)}
              closePreview={() => setShowImagePreview(false)}
            />
          )}
        </AnimatePresence>
        <main className="flex flex-col flex-1 text-c-black bg-blue-gray-50 lg:py-6 lg:px-12">
          <div
            className="flex flex-col w-full lg:flex-row lg:p-4 gap-x-20 mx-auto max-w-[1400px]"
            style={{ backgroundColor: isLoading ? "transparent" : "white" }}
          >
            {isLoading && <Spinner color="green" className="m-auto h-10 w-10" />}
            {isSuccess && (
              <React.Fragment>
                <div
                  className="flex-1 h-full flex items-stretch justify-center w-full lg:max-h-[450px] lg:max-w-[450px] lg:min-h-[450px] lg:min-w-[450px]"
                  onClick={() => setShowImagePreview(true)}
                >
                  <img
                    src={generateURL(data.data.image.data)}
                    alt={data.data.product_name}
                    className="object-contain object-center cursor-pointer"
                  />
                </div>
                <div className="flex lg:flex-1 flex-col mt-8 lg:mt-0 lg:py-6 px-4 sm:px-8 md:px-12">
                  <h3 className="text-lg sm:text-xl md:text-2xl">{data.data.product_name}</h3>
                  <h2 className="mt-2 text-green-600 text-lg sm:text-xl md:text-2xl bg-green-50/60 p-2">
                    {currenyFormatter(parseInt(data.data.price))}
                  </h2>
                  <div className="mt-3 border-y pt-4 pb-4">
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {data.data.product_description}
                    </p>
                  </div>
                  <div className="flex text-xs sm:text-sm items-center py-5 lg:py-8 text-gray-600">
                    <span>Quantity</span>
                    <div className="flex text-xs sm:text-sm border rounded-sm border-gray-400 ml-11 mr-4">
                      <button
                        className="p-1"
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity === 1 || data.data.quantity === 0}
                      >
                        <RiSubtractLine />
                      </button>
                      <span className="border-x border-gray-400 text-gray-700 flex items-center justify-center px-3 text-xs">
                        {quantity}
                      </span>
                      <button
                        className="p-1"
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={quantity === data.data.quantity || data.data.quantity === 0}
                      >
                        <IoIosAdd />
                      </button>
                    </div>
                    <span>{data.data.quantity} pieces available</span>
                  </div>
                  <div className="flex gap-x-5">
                    <button
                      className="flex items-center gap-x-2 px-5 py-2 border border-green-600 text-green-600 bg-green-50/60 duration-150 hover:bg-green-50"
                      disabled={data.data.quantity === 0}
                      onClick={handleAddToCart}
                    >
                      <BsCartPlus size={17} />
                      <span className="text-sm leading-none">Add to cart</span>
                    </button>
                    <button
                      className="bg-green-600 text-white px-7 py-2 duration-150 hover:bg-green-500 disabled:bg-gray-500"
                      disabled={data.data.quantity === 0}
                      onClick={handleCheckout}
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
          <Recommended />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
