import FooterPage from "../shared/Footer";
import NavbarPage from "../shared/Navbar";
import BannerPage from "./Banner";

const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <BannerPage />
      <FooterPage />
    </div>
  );
};

export default HomePage;
