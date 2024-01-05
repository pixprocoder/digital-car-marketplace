import FooterPage from "../shared/Footer";
import NavbarPage from "../shared/Navbar";
import BannerPage from "./Banner";
import FeatureServices from "./features/FeatureServices";

const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <BannerPage />
      <FeatureServices />
      <FooterPage />
    </div>
  );
};

export default HomePage;
