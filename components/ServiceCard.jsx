const ServiceCard = ({ data }) => {
  return (
    <div className="flex-center flex-col md:flex-start">
      <span className="text-5xl text-priamry">{data.icon}</span>
      <div className="text-center md:text-left">
        <h4 className="text-3xl font-semibold text-secondary mt-4 mb-2">
          {data.title}
        </h4>
        <p className="pargraph !text-gray-800">{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
