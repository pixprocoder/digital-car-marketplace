import Image from "next/image";
import banner from "../../../assets/banner-1.jpg";

const BannerPage = () => {
  return (
    <section className=" bg-black">
      <div className="w-[1400px] rounded-md mx-auto h-[500px] overflow-hidden">
        <Image className="w-full" src={banner} alt="banner"></Image>
      </div>
    </section>
  );
};

export default BannerPage;
