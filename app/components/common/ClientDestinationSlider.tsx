"use client";

import dynamic from "next/dynamic";

const DestinationSlider = dynamic(() => import("./DestinationCarousel"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[690px] bg-[#132B3D] md:min-h-[790px]" />
  ),
});

export default function ClientDestinationSlider() {
  return <DestinationSlider />;
}
