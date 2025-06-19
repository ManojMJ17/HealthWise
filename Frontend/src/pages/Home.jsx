import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";

const Home = () => {
  const navbarProps = {
    links: [
      { label: "Home", href: "/" },
      { label: "Remedies", href: "/" },
      { label: "Chat with AI", href: "/" },
      { label: "About", href: "/" },
    ],
  };
  return (
    <>
      <Navbar {...navbarProps} />
      <Dashboard />
    </>
  );
};

export default Home;
