const FeatureCard = ({ title, description }) => {
  return (
    <div className="w-full text-center md:text-left">
      <h4 className="text-gray-50 text-3xl font-semibold mb-4">{title}</h4>
      <p className="pargraph text-gray-200">{description}</p>
    </div>
  );
};

export default FeatureCard;
