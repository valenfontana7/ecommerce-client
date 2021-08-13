import React from "react";
import { useRouter } from "next/router";

function I() {
  const router = useRouter();
  console.log(router.query.pId);
  return <div>Props</div>;
}

export default I;
