import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckoutHeader: React.FC = () => {
  return (
    <header className="flex bg-white shadow-lg">
      <div className="flex flex-1 max-w-[1400px] mx-auto py-7">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-x-1">
            <FaShopify className="text-xl" />
            <h3 className="text-2xl font-semibold">Chupee</h3>
          </Link>
          <span className="bg-black h-full w-[3px] mx-3 rounded-md"></span>
          <h3 className="text-green-600 text-2xl font-[400]">Checkout</h3>
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
