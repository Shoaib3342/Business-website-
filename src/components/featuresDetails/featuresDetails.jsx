import DetailsImg from "../featuresDetails/detailImg";
import DetailCard from "../featuresDetails/detailCard";
import ImageInfo from "../../assets/img/features-1.jpg";
import ImageInfo1 from "../../assets/img/features-2.jpg";

const FeatureDetails = () => {
  return (
    <section className="w-full h-auto py-[50px] px-4">
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-40 mb-[70px] items-center">
        <DetailsImg imgDetail={ImageInfo} />
        <DetailCard
          title="Corporis temporibus maiores provident"
          description="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          btn="Learn More"
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-40 items-center">
        <DetailCard
          title="Corporis temporibus maiores provident"
          description="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          btn="Learn More"
        />
        <DetailsImg imgDetail={ImageInfo1} />
      </div>
    </section>
  );
};
export default FeatureDetails;
