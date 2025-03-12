import Title from "../headingText";
import ContCard from "../contacts/contactCards";
import MapImg from "../../assets/img/maps/th.jpg";

const Contact = () => {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20">
      <Title
        title="Contact"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <ContCard
          icons="bi bi-geo-alt"
          title="Address 1"
          description="A108 Adam Street, New York, NY 535022"
          extraClass="w-full md:w-[48%] lg:w-[650px]"
        />
        <ContCard
          icons="bi bi-telephone"
          title="Call Us"
          description="+1 5589 55488 55"
          extraClass="w-full md:w-[30%] lg:w-[300px]"
        />
        <ContCard
          icons="bi bi-envelope"
          title="Email Us"
          description="info@example.com"
          extraClass="w-full md:w-[30%] lg:w-[300px]"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
        <div className="w-full md:w-[48%] h-auto">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src={MapImg}
            alt="Map"
          />
        </div>

        <div className="w-full lg:w-[48%] md:w-[48%] py-6 px-6 shadow-md rounded-lg">
          <form action="">
            <div className="flex flex-wrap gap-4 mb-4">
              <input
                className="w-full md:w-[48%] py-2 px-3 border border-gray-300 rounded-md outline-[#469fb8]"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full md:w-[48%] py-2 px-3 border border-gray-300 rounded-md outline-[#469fb8]"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded-md outline-[#469fb8] mb-4"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-full py-2 px-3 border border-gray-300 rounded-md outline-[#469fb8] h-40"
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
