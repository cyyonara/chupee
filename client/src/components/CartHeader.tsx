import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const CartHeader: React.FC = () => {
  return (
    <header className="flex items-center py-6 border-b bg-white shadow-md sticky top-0">
      <div className="mx-auto flex-1 flex items-center max-w-[1400px]">
        <div className="flex items-center">
          <Link to="/" className="flex">
            <img src={logo} alt="logo" className="h-[55px] w-[55px] object-cover object-center" />
          </Link>
          <span className="h-[40px] block rounded-full mx-4 w-[3px] bg-black"></span>
          <h3 className="text-green-600 text-2xl">Shopping Cart</h3>
        </div>
      </div>
    </header>
  );
};

export default CartHeader;
