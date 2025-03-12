import FeatCards from "./featureCards";

const FeatureService = () => {
  return (
    <section className="flex flex-wrap justify-center sm:justify-around items-center bg-[#f8fbfc] py-12 px-6 sm:px-12 gap-6">
      <FeatCards
        icons="bi bi-briefcase"
        title="Lorem Ipsum"
        Description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />
      <FeatCards
        icons="bi bi-card-checklist"
        title="Dolor Sitema"
        Description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />
      <FeatCards
        icons="bi bi-bar-chart"
        title="Sed ut perspiciatis"
        Description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
      />
    </section>
  );
};

export default FeatureService;
