import React from "react";
import dynamic from "next/dynamic";

const LandingPageWrapper = dynamic(() => import("../containers/StarWars"));

export default function LandingPage() {
  return <LandingPageWrapper />;
}
