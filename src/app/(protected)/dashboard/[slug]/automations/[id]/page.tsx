import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automations";
import React from "react";

type Props = {
  params: { id: string };
};

//WIPA: set some metadata

const page = ({ params }: Props) => {
  // WIP: prefetch user automation data
  return (
    <div className="flex flex-col items-center gap-y-2">
      <AutomationsBreadCrumb id={params.id} />
    </div>
  );
};
