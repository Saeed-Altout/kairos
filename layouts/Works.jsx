import { steps } from "@/constants";

import { StepCard, TitleSection } from "@/components";

const Works = () => {
  return (
    <section className="md:pt-80">
      <div className="container">
        <TitleSection
          title="How The App Works?"
          TitleStyle="!text-secondary"
          subTitle=""
        />

        <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 lg:grid-cols-2">
          {steps.map((step, index) => (
            <StepCard key={index} data={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
