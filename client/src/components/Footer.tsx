import { Link } from "react-router-dom";
import { RiVisaLine, RiBankCardLine } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { SiBankofamerica, SiNubank } from "react-icons/si";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { memo } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex border-t-[3px] border-green-600 bg-white text-c-black px-4 sm:px-8 md:px-12">
      <div className="m-auto max-w-[1400px] flex flex-col flex-1 gap-y-10 mt-8">
        <div className="flex flex-col md:flex-row gap-y-16 justify-between">
          <div className="flex flex-col gap-y-4">
            <span className="text-sm font-semibold">CUSTOMER SERVICE</span>
            <div className="flex flex-col gap-y-1">
              <Link to="#" className="text-xs">
                Help Centre
              </Link>
              <Link to="#" className="text-xs">
                Chupee Cares PH
              </Link>
              <Link to="#" className="text-xs">
                Payment Methods
              </Link>
              <Link to="#" className="text-xs">
                Order Tracking
              </Link>
              <Link to="#" className="text-xs">
                Free Shipping
              </Link>
              <Link to="#" className="text-xs">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-sm font-semibold">ABOUT CHUPEE</span>
            <div className="flex flex-col gap-y-1">
              <Link to="/about-us" className="text-xs">
                About us
              </Link>
              <Link to="#" className="text-xs">
                Chupee Blog
              </Link>
              <Link to="#" className="text-xs">
                Chupee Careers
              </Link>
              <Link to="#" className="text-xs">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-sm font-semibold">PAYMENT</span>
            <div className="grid grid-cols-[repeat(3,80px)] md:grid-cols-3 gap-2">
              <span className="bg-gray-100 flex py-1 px-4 rounded-sm">
                <RiVisaLine className="text-2xl m-auto" />
              </span>
              <span className="bg-gray-100 flex py-1 px-4 rounded-sm">
                <HiOutlineBanknotes className="text-lg m-auto" />
              </span>
              <span className="bg-gray-100 flex py-1 px-4 rounded-sm">
                <RiBankCardLine className="text-lg m-auto" />
              </span>
              <span className="bg-gray-100 flex py-1 px-4 rounded-sm">
                <SiBankofamerica className="text-lg m-auto" />
              </span>
              <span className="bg-gray-100 flex py-1 px-4 rounded-sm">
                <SiNubank className="text-lg m-auto" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-sm font-semibold">FOLLOW US</span>
            <div className="flex flex-col gap-y-2">
              <Link
                to="https://www.facebook.com/benjoseph.nunez"
                className="flex items-center gap-x-1"
              >
                <FaFacebook />
                <span className="text-xs">Facebook</span>
              </Link>
              <Link to="#" className="flex items-center gap-x-1">
                <PiInstagramLogoFill size={19} />
                <span className="text-xs">Instagram</span>
              </Link>
              <Link to="#" className="flex items-center gap-x-1">
                <FaTwitterSquare />
                <span className="text-xs">Twitter</span>
              </Link>
              <Link to="#"></Link>
            </div>
          </div>
        </div>
        <div className=" flex border-t py-6 items-center">
          <span className="text-gray-700 text-sm">&#169; 2023 Chupee. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
