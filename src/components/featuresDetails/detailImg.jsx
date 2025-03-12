const DetailsImg = ({ imgDetail, altText = "Image" }) => {
  return (
    <div className="w-full md:w-[60%] lg:w-[40%] flex justify-center">
      <img
        className="w-auto max-w-full h-auto rounded-[20px] object-cover"
        src={imgDetail}
        alt={altText}
        loading="lazy"
      />
    </div>
  );
};
export default DetailsImg;
