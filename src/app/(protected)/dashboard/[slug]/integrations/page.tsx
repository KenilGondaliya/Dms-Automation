import { INTEGRATION_CARDS } from "@/constants/integrations";
import React from "react";
import IntegrationsCard from "./_components/integration-card/page";

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATION_CARDS.map((card, key) => (
          <IntegrationsCard key={key} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page;
