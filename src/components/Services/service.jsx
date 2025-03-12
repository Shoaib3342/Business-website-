import Title from "../headingText";
import ServiceCard from "../Services/serviceCards";

const Service = () => {
  const services = [
    {
      CardIcons: "bi bi-activity",
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      links: "Learn More",
      color: "text-[#0dcaf0]",
      bgcolor: "bg-[#e6fafd]",
      bordercolor: "text-[#0dcaf0]",
    },
    {
      CardIcons: "bi bi-broadcast",
      title: "Eosle Commodi",
      description:
        "Another description for the second service. Tailwind makes it easy to style components dynamically.",
      links: "Learn More",
      color: "text-[#fd7e14]",
      bgcolor: "bg-[#fff2e7]",
    },
    {
      CardIcons: "bi bi-easel",
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      links: "Learn More",
      color: "text-[#20c997]",
      bgcolor: "bg-[#e8f9f4]",
    },
    {
      CardIcons: "bi bi-bounding-box-circles",
      title: "Asperiores Commodi",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      links: "Learn More",
      color: "text-[#9265f4]",
      bgcolor: "bg-[#efe7fe]",
    },
    {
      CardIcons: "bi bi-calendar4-week",
      title: "Velit Doloremque.",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      links: "Learn More",
      color: "text-[#df1529]",
      bgcolor: "bg-[#fce7e5]",
    },
    {
      CardIcons: "bi bi-chat-square-text",
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      links: "Learn More",
      color: "text-[#f3268c]",
      bgcolor: "bg-[#fee9f3]",
    },
  ];

  return (
    <section className="w-full h-auto bg-[#f8fbfc] pt-[50px] px-4 md:px-8">
      <Title
        title="Services"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="grid justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 py-[50px]">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Service;
