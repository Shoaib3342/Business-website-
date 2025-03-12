const Title = ({ title, description }) => {
  return (
    <div className="text-center relative">
      <h1 className="text-[32px] mb-5 font-medium after:content-[''] after:block after:w-[100px] after:h-[2px] after:bg-blue-700 after:mx-auto after:mt-2">
        {title}
      </h1>
      <p className="text-[16px] font-[400]">{description}</p>
    </div>
  );
};
export default Title;
