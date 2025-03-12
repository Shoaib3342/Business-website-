import aboutImg1 from "../assets/img/about-company-1.jpg";
import aboutImg2 from "../assets/img/about-company-2.jpg";
import aboutImg3 from "../assets/img/about-company-3.jpg";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center pt-10 pb-5 px-6 lg:px-12 gap-8">
      <div className="w-full lg:w-1/2 lg:ml-12">
        <p className="text-base mb-4 text-gray-600">WHO WE ARE</p>
        <h1 className="text-2xl lg:text-3xl text-black mb-2 font-medium leading-tight">
          Unleashing Potential with Creative Strategy
        </h1>
        <p className="text-base mb-4 italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="mb-4">
          <li className="text-base pb-2 flex items-center">
            <i className="bi bi-check-circle text-lg text-[#388da8] mr-2"></i>
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </li>
          <li className="text-base pb-2 flex items-center">
            <i className="bi bi-check-circle text-lg text-[#388da8] mr-2"></i>
            <span>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </span>
          </li>
          <li className="text-base pb-2 flex items-center">
            <i className="bi bi-check-circle text-lg text-[#388da8] mr-2"></i>
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </span>
          </li>
        </ul>
        <button className="group hover:bg-[#388ea8b7] transition-all duration-300 ease-in-out py-2 px-5 bg-[#388da8] rounded-md text-white text-lg tracking-wide cursor-pointer">
          Read More
          <i className="bi bi-arrow-right inline-block group-hover:translate-x-1 transition-all duration-300 ease-in-out ml-2"></i>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-1/2 gap-4 justify-center lg:justify-end">
        <div className="w-full sm:w-[580px]">
          <img
            className="w-full h-[300px] sm:h-[420px] rounded-lg object-cover"
            src={aboutImg1}
            alt="About Us"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 w-full sm:w-[580px]">
          <img
            className="w-full h-[150px] sm:h-[200px] rounded-lg object-cover"
            src={aboutImg2}
            alt="About Us"
          />
          <img
            className="w-full h-[150px] sm:h-[200px] rounded-lg object-cover"
            src={aboutImg3}
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
