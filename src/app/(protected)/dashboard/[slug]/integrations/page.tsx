import { integrations_CARDS } from "@/constants/integrationss";
import React from "react";
import integrationssCard from "./_components/integrations-card/page";

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {integrations_CARDS.map((card, key) => (
          <integrationssCard key={key} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page;
