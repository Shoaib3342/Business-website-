import Title from "../headingText";
import FeatCards from "./featCard";
import featImage from "../../assets/img/tabs-1.jpg";

const MainFeat = () => {
  const features = [
    {
      icons: "bi bi-binoculars",
      title: "Modi sit est dela pireda nest",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icons: "bi bi-box-seam",
      title: "Modi sit est dela pireda nest",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icons: "bi bi-brightness-high",
      title: "Modi sit est dela pireda nest",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];

  return (
    <section className="py-[50px] px-4">
      <Title
        title="Features"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
        <div className="w-full mt-[50px]">
          {features.map((feature, index) => (
            <FeatCards key={index} {...feature} isFirst={index === 0} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <img
            className="w-[85%] h-auto mt-[60px] rounded-[20px] object-cover"
            src={featImage}
            alt="Feature"
          />
        </div>
      </div>
    </section>
  );
};

export default MainFeat;
