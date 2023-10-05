const StepCard = ({ data }) => {
  return (
    <div className="flex gap-5">
      <span className="flex-center w-10 h-10 p-5 text-lg font-semibold text-white rounded-full bg-priamry block">
        {data.step}
      </span>
      <div className="flex-start gap-2">
        <h3 className="text-3xl font-semibold text-secondary md:text-4xl">
          {data.title}
        </h3>
        <p className="pargraph">{data.description}</p>
      </div>
    </div>
  );
};

export default StepCard;
