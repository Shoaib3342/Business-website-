import Title from "../headingText";
import Accordion from "./accordion";

const Frequency = () => {
  const accordionData = [
    {
      title: "Non consectetur a erat nam at lectus urna duis?",
      content:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.",
    },
    {
      title: "Feugiat scelerisque varius morbi enim nunc faucibus?",
      content:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.",
    },
    {
      title: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      content:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.",
    },
    {
      title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      content:
        "Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.",
    },
    {
      title: "Perspiciatis quod quo quos nulla quo illum ullam?",
      content:
        "Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
    },
    {
      title: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
      content:
        "Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum.",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6">
      <Title title="Frequently Asked Questions" />
      <Accordion items={accordionData} />
    </section>
  );
};

export default Frequency;
