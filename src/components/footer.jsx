import Button from "./button";

const Footer = () => {
  return (
    <section className="bg-[#f8fbfc] py-10 px-6 md:px-10 lg:px-20">
      <div className="py-10 flex flex-wrap gap-10 justify-between items-start border-b border-gray-400">
        <div className="w-full md:w-[40%] lg:w-[25%]">
          <h1 className="text-2xl font-semibold mb-4">QuickStart</h1>
          <p className="text-sm mb-1">A108 Adam Street</p>
          <p className="text-sm mb-1">New York, NY 535022</p>
          <h2 className="text-sm font-medium mt-4">
            Phone: <span className="font-normal">+1 5589 55488 55</span>
          </h2>
          <h2 className="text-sm font-medium mt-1">
            Email: <span className="font-normal">info@example.com</span>
          </h2>
          <div className="flex gap-4 mt-5">
            {["twitter-x", "facebook", "instagram", "linkedin"].map((icon) => (
              <i
                key={icon}
                className={`bi bi-${icon} text-lg py-[8px] px-[12px] rounded-full border text-gray-500 hover:text-[#388da8] cursor-pointer`}
              ></i>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[20%]">
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Service", "Product", "Policy"].map((link) => (
              <li
                key={link}
                className="text-sm font-medium text-gray-600 hover:text-[#388da8]"
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[20%]">
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {[
              "Web Design",
              "Web Development",
              "Product",
              "Marketing",
              "Design",
            ].map((service) => (
              <li
                key={service}
                className="text-sm font-medium text-gray-600 hover:text-[#388da8]"
              >
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[40%] lg:w-[25%]">
          <h2 className="text-lg font-semibold mb-4">Our Newsletter</h2>
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="w-full md:w-[70%] py-2 px-3 border rounded-[50px] focus:outline-[#388da8] bg-white"
            />
            <Button BtnText="Subscribe" />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-sm tracking-wide">
          © Copyright <span className="font-bold">QuickStart</span> All Rights
          Reserved
        </h1>
        <h2 className="text-xs mt-2">
          Designed by <span className="text-[#388da8]">BootstrapMade</span>
        </h2>
      </div>
    </section>
  );
};

export default Footer;
