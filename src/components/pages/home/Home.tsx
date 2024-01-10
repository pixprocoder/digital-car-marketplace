import BannerPage from "./Banner";
import FeatureServices from "./features/FeatureServices";
import Testimonials from "./testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <BannerPage />
      <FeatureServices />
      <Testimonials />
    </div>
  );
};

export default HomePage;
