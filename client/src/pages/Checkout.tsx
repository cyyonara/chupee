import Footer from "../components/Footer";
import CheckoutHeader from "../components/CheckoutHeader";
import { useSearchParams, Navigate, useNavigate } from "react-router-dom";
import { useCheckedOutProducts } from "../hooks/useCheckedOutProducts";
import { generateURL } from "../utils/generateUrl";
import { currenyFormatter } from "../components/ProductsGrid";
import { useAuthStore } from "../store/authStore";
import { Spinner } from "@material-tailwind/react";
import { useEffect } from "react";
import { useCheckout } from "../hooks/useCheckout";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";

interface ICheckedOutProduct {
  productId: number;
  quantity: number;
}

const Checkout: React.FC = () => {
  const checkedOutProducts: ICheckedOutProduct[] = [];
  const { auth } = useAuthStore();
  const [searchParams] = useSearchParams();
  const { mutate } = useCheckout();
  const productString = searchParams.get("products");
  const navigate = useNavigate();

  productString!.split("-").forEach((product): void => {
    const productInfo = product.split("/");
    checkedOutProducts.push({
      productId: parseInt(productInfo[0]),
      quantity: parseInt(productInfo[1]),
    });
  });

  const { data, isSuccess, isLoading } = useCheckedOutProducts(
    checkedOutProducts.map((product) => product.productId)
  );

  let total = 0;

  const handleCheckout = (): void => {
    toast.promise<string>(
      new Promise((resolve, reject) => {
        mutate(
          {
            products: checkedOutProducts,
            total,
          },
          {
            onSuccess: () => {
              resolve("Order successfully placed!");
              navigate("/");
            },
            onError: (err) => reject(err.response?.data.message),
          }
        );
      }),
      {
        position: "top-right",
        duration: 1000,
        loading: "Proccessing your order",
        success: (message) => message,
        error: (err) => err || "Internal Server Error",
      }
    );
  };

  useEffect(() => {
    document.title = "Checkout";
  }, []);

  if (!auth) return <Navigate to="/" />;

  return (
    <div className="flex flex-col">
      <CheckoutHeader />
      <main className="flex items-center bg-gray-100 py-9">
        {isLoading && <Spinner className="h-[100px] w-[40px] mx-auto" color="green" />}
        {isSuccess && (
          <div className="flex flex-col w-full max-w-[1400px] mx-auto bg-white shadow-md mb-14">
            <div className="p-7 border-b">
              <span className="text-gray-600">{`Customer Name: ${auth!.firstName} ${
                auth!.lastName
              }`}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="text-lg p-7 flex-1 text-start">Products Ordered</th>
                  <th className="font-normal p-7 text-gray-500">Unit Price</th>
                  <th className="font-normal p-7 text-gray-500">Quantity</th>
                  <th className="font-normal p-7 text-gray-500 text-end">Item Subtotal</th>
                </tr>
              </thead>
              <tbody className="mt-10">
                {checkedOutProducts.map((product) => {
                  const productInfo = data.data.find(
                    (fetchedProduct) => product.productId === fetchedProduct.product_id
                  );
                  total += parseInt(productInfo?.price as string) * product.quantity;
                  return (
                    <tr key={product.productId}>
                      <td className="flex items-center p-7 gap-x-3 flex-1">
                        <img
                          src={generateURL(productInfo?.image.data)}
                          alt={productInfo?.product_name}
                          className="h-[70px] w-[70px] object-contain object-center bg-white"
                        />
                        <p className="text-gray-800 line-clamp-1">{productInfo?.product_name}</p>
                      </td>
                      <td className="p-7 text-center text-gray-800 font-semibold">
                        {currenyFormatter(parseInt(productInfo?.price as string))}
                      </td>
                      <td className="p-7 text-center text-gray-800">{`${product.quantity}x`}</td>
                      <td className="p-7 text-end text-gray-800 font-semibold">
                        {currenyFormatter(
                          parseInt(productInfo?.price as string) * product.quantity
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-between bg-white border-t border-dashed border-green-700 p-7">
              <button
                className="text-white bg-green-600 px-10 py-2 rounded-sm flex items-center duration-150 hover:bg-green-500 disabled:bg-green-400 active:bg-green-400"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-x-2">
                    Proccessing your order <AiOutlineLoading className="animate-spin text-xl" />
                  </span>
                ) : (
                  "Place order"
                )}
              </button>
              <div className=" flex items-center gap-x-10">
                <span className="text-gray-500">
                  Order Total{" "}
                  {`(${checkedOutProducts.length} ${
                    checkedOutProducts.length > 1 ? "Items" : "Item"
                  }):`}
                </span>
                <span className="font-semibold">{currenyFormatter(total)}</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
