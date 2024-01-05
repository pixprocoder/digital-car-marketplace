import FooterPage from "../shared/Footer";
import NavbarPage from "../shared/Navbar";
import BannerPage from "./Banner";
import FeatureServices from "./features/FeatureServices";
import Testimonials from "./testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <BannerPage />
      <FeatureServices />
      <Testimonials />
      <FooterPage />
    </div>
  );
};

export default HomePage;
