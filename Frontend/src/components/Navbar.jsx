import { Globe, Search, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const navbarProps = {
    links: [
      { label: "Home", href: "/home" },
      { label: "Remedies", href: "/remedies" },
      { label: "Chat with AI", href: "/chat-with-ai" },
      { label: "About", href: "/about" },
    ],
  };

  const location = useLocation();

  const isAuthPage = ["/register", "/login"].includes(location.pathname);

  return (
    <>
      <div className="mx-10 my-5 flex gap-10 justify-between items-center">
        <div className="flex gap-10">
          <div>
            <p className="text-[18px] font-bold text-white">HealthWise</p>
          </div>
          {!isAuthPage && (
            <div>
              <ul className="flex gap-6">
                {navbarProps.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-white text-[16px] hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {!isAuthPage && (
          <div className="flex gap-10">
            <div className="flex items-center relative w-[150px]">
              <Search
                size={18}
                className="absolute ml-4 text-[#888] cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-8 py-2 rounded-md border-1 text-center grey"
              />
            </div>
            <div className="grey w-10 h-10 rounded-[50%] flex justify-center items-center cursor-pointer">
              <Globe size={20} />
            </div>
            <div className="grey w-10 h-10 rounded-[50%] flex justify-center items-center cursor-pointer">
              <Link to="/profile">
                <UserRound />
              </Link>
            </div>
          </div>
        )}
      </div>
      <hr className="text-white" />
    </>
  );
};

export default Navbar;
