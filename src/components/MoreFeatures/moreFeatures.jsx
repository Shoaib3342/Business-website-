import MoreCards from "./moreCards";
import moreImg from "../../assets/img/features-3.jpg";

const MoreFeat = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[60px] items-center py-[50px] lg:py-[80px] px-5">
      <div className="w-full lg:w-[40%] text-center lg:text-left">
        <div>
          <h1 className="text-[24px] md:text-[28px] mb-[16px] md:mb-[20px] font-medium text-[#000a]">
            Enim quis est voluptatibus aliquid consequatur
          </h1>
          <p className="text-[14px] md:text-[16px] mb-[16px] md:mb-[20px] font-[500] text-[#000000ab]">
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
            voluptate sed facere corporis dolores excepturi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] mt-[30px] md:mt-[50px] text-start">
          <MoreCards
            icons="bi bi-easel"
            title="Lorem Ipsum"
            description="Voluptatum deleniti atque corrupti quos dolores et quas molestias"
          />
          <MoreCards
            icons="bi bi-patch-check"
            title="Nemo Enim"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise"
          />
          <MoreCards
            icons="bi bi-brightness-high"
            title="Dine Pad"
            description="Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit"
          />
          <MoreCards
            icons="bi bi-brightness-high"
            title="Tride clov"
            description="Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit"
          />
        </div>
      </div>
      <div className="w-full lg:w-[38%]">
        <img src={moreImg} alt="Feature" className="w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default MoreFeat;
