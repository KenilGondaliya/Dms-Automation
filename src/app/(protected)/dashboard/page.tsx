import { onBoardUser } from "@/actions/user";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  // server action Onboard the user
  // WIP: 200 || 201
  const user = await onBoardUser();
  return <div>Page</div>;
};

export default Page;
