import { FaShopify } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { toast } from "sonner";
import axios from "axios";
import SearchInput from "./SearchInput";

const Header: React.FC = () => {
  const { auth, clearCredential } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    try {
      await axios.get("/api/auth/logout", { withCredentials: true });
      toast.success("Logged out");
      clearCredential();
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <header className="flex bg-white z-[100] py-6 px-4 sm:px-8 md:px-12 text-c-black sticky top-0 border-b">
      <div className="flex justify-between items-center m-auto flex-1 max-w-[1400px] gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <Link to="/" className="flex items-end gap-x-2">
          <FaShopify className="text-2xl " />
          <span className="text-2xl leading-none font-semibold">Chupee</span>
        </Link>
        <SearchInput />
        <div className="flex items-center h-full gap-x-8">
          <Link to="/cart" className="hidden md:block">
            <CiShoppingCart size={30} />
          </Link>
          <div className="flex items-center gap-x-4">
            {auth ? (
              <span className="hidden sm:flex cursor-pointer relative group items-center justify-center">
                <CiUser size={24} />
                <div className="flex scale-0 group-hover:scale-100 duration-150 absolute bg-white top-[103%] p-2 rounded-sm border right-0 text-sm">
                  <ul className="flex flex-col gap-y-1">
                    <li className="hover:text-green-600">
                      <span className="whitespace-nowrap">{`${auth.firstName} ${auth.lastName}`}</span>
                    </li>
                    <li className="hover:text-green-600">
                      <button className="w-full text-start" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </span>
            ) : (
              <>
                <Link to="/login" className="hover:underline hidden md:block">
                  Login
                </Link>
                <Link to="/signup" className="hover:underline whitespace-nowrap hidden md:block">
                  Sign up
                </Link>
              </>
            )}
            <span className="cursor-pointer sm:hidden">
              <IoIosSearch className="text-2xl text-gray-800" />
            </span>
            <span className="cursor-pointer md:hidden">
              <TbMenuDeep className="text-2xl text-gray-800" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
