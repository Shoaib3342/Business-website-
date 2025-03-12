import BgImg from "../assets/img/hero-bg-light.webp";
import Button from "../components/button";
import headImg from "../assets/img/hero-services-img.webp";

const HeadSec = () => {
  return (
    <section
      className="relative min-h-[120vh] lg-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24">
        <h1 className="text-[28px] sm:text-[42px] md:text-[46px] lg:text-[48px] text-[#3e5055] font-semibold leading-tight pt-20 sm:pt-32">
          Welcome To <span className="text-[#388da8]">Quick Start</span>
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#3e5055] mt-2 mb-5 max-w-[600px]">
          Quickly start your project now and set the stage for success
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button BtnText="Get Started" />
          <button className="flex items-center bg-transparent text-[16px] font-medium hover:text-[#388da8] text-black px-5 py-2 cursor-pointer">
            <i className="bi bi-play-circle text-[26px] text-[#4795ad] px-2"></i>
            Watch Videos
          </button>
        </div>
        <img
          className="w-full sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] mt-6 sm:mt-8"
          src={headImg}
          alt="services image"
        />
      </div>
    </section>
  );
};

export default HeadSec;
