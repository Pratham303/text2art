import { assets } from "../assets/assets";
import { FaImages } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      {/* <img width={150} src={assets.logo} alt="" /> */}
      <div className="flex gap-2">
        <FaImages className="h-10 w-10" />
        <p className="text-2xl font-semibold font-serif">Text2Art</p>
      </div>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @PrathamVataliya | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img width={35} src={assets.facebook_icon} alt="" />
        <img width={35} src={assets.twitter_icon} alt="" />
        <img width={35} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
