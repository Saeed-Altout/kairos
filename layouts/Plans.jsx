import { FiCheck } from "react-icons/fi";

import { plans } from "@/constants";
import { Button, TitleSection } from "@/components";

const Plans = () => {
  return (
    <section className="py-40 bg-gray-100" id="pricing">
      <div className="container">
        <TitleSection
          title="Our Simple Straight-Forward Pricing."
          subTitle="Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae
          nemo est. Ut quis enim rerum quia assumenda repudiandae molestiae
          cumque qui. Amet repellat omnis ea."
          TitleStyle="!text-secondary"
          subTitleStyle="!text-secondary"
        />

        <div className="mt-20 w-fit mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10">
          {plans.map((plan, index) =>
            plan.state == "free" ? (
              <div
                key={index}
                className="p-5 flex-start gap-5 border-[1px] border-priamry"
              >
                <p className="capitalize font-semibold text-gray-800 text-2xl">
                  {plan.state}
                </p>

                <p className="text-7xl inline-block font-bold text-secondary">
                  ${plan.price}
                  <span className="ml-3 text-base font-normal text-gray-800">
                    {plan.time}
                  </span>
                </p>

                <ul className="flex-start gap-5 my-5">
                  {plan.list.map((item, index) => (
                    <li key={index} className="flex-center gap-2">
                      <FiCheck className="text-priamry" />
                      <p className="text-gray-800">{item}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  label="Get Started"
                  styles="bg-priamry text-white py-3 w-full"
                />
              </div>
            ) : (
              <div key={index} className="p-5 flex-start gap-5 bg-priamry">
                <p className="capitalize font-semibold text-gray-50 text-2xl">
                  {plan.state}
                </p>

                <p className="text-7xl inline-block font-bold text-gray-50">
                  ${plan.price}
                  <span className="ml-3 text-base font-normal text-gray-50">
                    {plan.time}
                  </span>
                </p>

                <ul className="flex-start gap-5 my-5">
                  {plan.list.map((item, index) => (
                    <li key={index} className="flex-center gap-2">
                      <FiCheck className="text-gray-50" />
                      <p className="text-gray-50">{item}</p>
                    </li>
                  ))}
                </ul>
                <Button
                  label="Get Started"
                  styles="bg-gray-50 text-secondary py-3 w-full"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Plans;
