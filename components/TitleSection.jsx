const TitleSection = ({ title, subTitle, TitleStyle, subTitleStyle }) => {
  return (
    <div className="flex flex-col gap-5 text-center max-w-5xl mx-auto">
      <h1 className={`headSection ${TitleStyle}`}>{title}</h1>
      <p className={`subSection ${subTitleStyle}`}>{subTitle}</p>
      <span className="block w-80 h-px mx-auto my-5 bg-gray-400" />
    </div>
  );
};

export default TitleSection;
