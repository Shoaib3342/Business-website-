import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../headingText";
import image1 from "../../assets/img/testimonials/testimonials-1.jpg";
import image2 from "../../assets/img/testimonials/testimonials-2.jpg";
import image3 from "../../assets/img/testimonials/testimonials-3.jpg";
import image4 from "../../assets/img/testimonials/testimonials-4.jpg";
import image5 from "../../assets/img/testimonials/testimonials-5.jpg";

const Testimonilas = () => {
  const testimonials = [
    {
      name: "Matt Brandon",
      role: "Freelancer",
      img: image1,
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      img: image2,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      img: image3,
      text: "Proin iaculis purus consequat sem cure dignissim donec porttitor enim suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget ultricies eget id, aliquam ege nibh et. Maecenas aliquam.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      img: image4,
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      img: image5,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
  ];
  return (
    <section className="bg-[#f8fbfc] pt-[50px] px-[30px]">
      <Title
        title="Testimonials"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="max-w-[75%]  mx-auto py-10">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 1 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          <style>
            {`
            .swiper-pagination-bullet {
             width: 12px;
             height: 12px;
             background-color: #9ca3af;
             opacity: 0.75;
             transition: all 0.3s;
             }
            .swiper-pagination-bullet-active {
             width: 12px;
             height: 12px;
             background-color: #3b82f6;
             opacity: 1;
             }`}
          </style>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.2)]  py-[40px] px-[40px] flex flex-col items-center text-center mb-[58px]">
                <div className="flex space-x-1 text-[20px] text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill" />
                  ))}
                </div>
                <p className="mt-4 text-gray-700 text-[16px] font-[500]">
                  {testimonial.text}
                </p>
                <div className="mt-4 flex flex-col items-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-[80px] h-[80px] border-2 border-[#f7f8f8] rounded-full"
                  />
                  <h3 className="font-semibold text-lg mt-2">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-gray-500 text-sm">{testimonial.role}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonilas;
