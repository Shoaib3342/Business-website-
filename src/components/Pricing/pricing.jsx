import Title from "../headingText";
import PricingCards from "../Pricing/pricingCard";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free Plan",
      price: 0,
      description: "Ullam mollitia quasi nobis soluta in voluptatum et sint.",
      features: [
        { text: "Quam adipiscing vitae proin", included: true },
        { text: "Nec feugiat nisl pretium", included: true },
        { text: "Nulla at volutpat diam uteera", included: true },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Massa ultricies mi quis hendrerit", included: false },
        { text: "Nulla at volutpat diam uteera", included: true },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Pharetra massa massa ultricies", included: false },
      ],
    },
    {
      title: "Business Plan",
      price: 29,
      description: "llam mollitia quasi nobis soluta in voluptatum et sint.",
      features: [
        { text: "Quam adipiscing vitae proin", included: true },
        { text: "Nec feugiat nisl pretium", included: true },
        { text: "Nulla at volutpat diam uteera", included: true },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Nulla at volutpat diam uteera", included: true },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Nulla at volutpat diam uteera", included: true },
        { text: "Pharetra massa massa ultricies", included: false },
      ],
      isPopular: true,
      bgcolor: "bg-[#388da8]",
      text: "text-white",
      border: "border-none",
    },
    {
      title: "Developer Plan",
      price: 49,
      description: "Ullam mollitia quasi nobis soluta in voluptatum et sint.",
      features: [
        { text: "Quam adipiscing vitae proin", included: true },
        { text: "Nec feugiat nisl pretium", included: true },
        { text: "Nulla at volutpat diam uteera", included: true },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Pharetra massa massa ultricies", included: false },
        { text: "Pharetra massa massa ultricies", included: false },
      ],
    },
  ];

  return (
    <section className="py-10">
      <Title
        title="Pricing"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="pricing-container flex flex-wrap justify-center gap-6 mt-10">
        {pricingPlans.map((plan, index) => (
          <PricingCards key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
