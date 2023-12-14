import CartHeader from "../components/CartHeader";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { generateURL } from "../utils/generateUrl";
import { currenyFormatter } from "../components/ProductsGrid";
import { Checkbox } from "@material-tailwind/react";
import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

interface SelectedProduct {
  productId: number;
  quantity: number;
  totalPrice: number;
}

interface HandleCheckParams extends SelectedProduct {
  event: React.ChangeEvent<HTMLInputElement>;
}

const Cart: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const { data, isSuccess } = useCart();
  const navigate: NavigateFunction = useNavigate();
  const totalRef = useRef<HTMLSpanElement | null>(null);
  const queryClient = useQueryClient();

  const handleCheck = ({ productId, totalPrice, quantity, event }: HandleCheckParams) => {
    if (event.target.checked) {
      setSelectedProducts((state) => [...state, { productId, totalPrice, quantity }]);
    } else {
      setSelectedProducts((state) => state.filter((product) => productId !== product.productId));
    }
  };

  const handleCheckout = () => {
    if (!selectedProducts.length)
      return toast.error("You have not selected any items for checkout", {
        position: "top-right",
        duration: 2000,
      });

    const checkoutQuery: string[] = selectedProducts.map(
      (product) => `${product.productId}/${product.quantity}`
    );
    navigate(`/checkout?products=${checkoutQuery.join("-")}`);
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      const allProducts: SelectedProduct[] = data!.data.map((product) => {
        const displayedQuantity =
          product.cartQuantity > product.currentQuantity
            ? product.currentQuantity
            : product.cartQuantity;
        return {
          productId: product.productId,
          quantity: displayedQuantity,
          totalPrice: displayedQuantity * parseInt(product.price),
        };
      });

      setSelectedProducts(allProducts);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleDelete = async (productId: number): Promise<void> => {
    try {
      await axios.put("/api/cart", { productIds: [productId] }, { withCredentials: true });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSelectedItems = async () => {
    try {
      if (!selectedProducts.length)
        return toast.error("You have not selected any items to delete", {
          position: "top-right",
          duration: 2000,
        });
      const productIds = selectedProducts.map(({ productId }) => productId);
      await axios.put("/api/cart", { productIds }, { withCredentials: true });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      totalRef.current!.innerText = currenyFormatter(0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <div className="flex flex-col bg-gray-100">
      <CartHeader />
      <main className="flex flex-col py-10 px-5">
        <section className="flex flex-col mx-auto w-full max-w-[1400px]">
          <div className="flex bg-white px-5 rounded-md">
            <span className="flex-1 py-6 text-gray-700 font-medium">Product</span>
            <span className="w-[10%] py-6 text-center text-gray-700">Unit Price</span>
            <span className="w-[10%] py-6 text-center text-gray-700">Quantity</span>
            <span className="w-[10%] py-6 text-center text-gray-700">Total Price</span>
            <span className="w-[10%] py-6 text-end text-gray-700">Actions</span>
          </div>
          {isSuccess && (
            <div className="flex flex-col mt-6 gap-y-3">
              {data.data.map((product) => {
                const inSelectedProducts = selectedProducts.find(
                  (sProduct) => sProduct.productId === product.productId
                );
                let isExist = inSelectedProducts ? true : false;
                const displayedQuantity =
                  product.cartQuantity > product.currentQuantity
                    ? product.currentQuantity
                    : product.cartQuantity;
                return (
                  <div
                    key={product.productName}
                    className="flex items-center px-5 py-6 bg-white rounded-md"
                  >
                    <div className="flex items-center gap-x-4 flex-1">
                      <Checkbox
                        color="green"
                        checked={isExist}
                        crossOrigin={undefined}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleCheck({
                            event: e,
                            productId: product.productId,
                            quantity: displayedQuantity,
                            totalPrice: parseInt(product.price) * displayedQuantity,
                          })
                        }
                      />
                      <div className="flex items-center gap-x-4">
                        <img
                          src={generateURL(product.image.data)}
                          alt={product.productName}
                          className="bg-white h-[70px] w-[70px]"
                        />
                        <p className="text-sm text-gray-800 line-clamp-2">{product.productName} </p>
                      </div>
                    </div>
                    <span className="w-[10%] text-center text-sm font-[500]">
                      {currenyFormatter(parseInt(product.price))}
                    </span>
                    <span className="w-[10%] text-center text-sm">{displayedQuantity}</span>
                    <span className="w-[10%] text-center text-sm font-[500]">
                      {currenyFormatter(parseInt(product.price) * displayedQuantity)}
                    </span>
                    <div className="flex w-[10%]">
                      <button
                        className="ml-auto text-green-700 hover:underline py-[6px] text-sm rounded-sm"
                        onClick={() => handleDelete(product.productId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
        {isSuccess && (
          <section className="flex items-center mx-auto w-full max-w-[1400px] mt-5 mb-16 bg-white rounded-md p-5 justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox color="green" crossOrigin={undefined} onChange={handleSelectAll} />
              <div className="flex gap-x-2">
                <span>Select all ({data.data.length})</span>
                <button
                  className="text-green-700 hover:underline"
                  onClick={handleDeleteSelectedItems}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex items-center gap-x-10">
              <div className="flex items-center">
                <span className="mr-1">Total({data.data.length} item)</span>
                <span className="text-green-600 text-2xl" ref={totalRef}>
                  {currenyFormatter(
                    selectedProducts.reduce((acc, prod) => prod.totalPrice + acc, 0)
                  )}
                </span>
              </div>
              <button
                className="bg-green-600 text-white text-sm py-2 px-12 rounded-sm duration-150 hover:bg-green-500"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
