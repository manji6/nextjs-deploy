"use client";
import PartsWorks from "@components/partsWorks";

export default function Page() {

  return (
    <div>
      <div className="container max-w-full bg-white rounded-lg mb-5">
        <h2 className="p-5 text-2xl font-extrabold">主な仕事</h2>

        <PartsWorks category="city_institution" />
        <PartsWorks category="exposition" />
        <PartsWorks category="pavilion" />
        <PartsWorks category="exhibition" />
        <PartsWorks category="showroom" />
        <PartsWorks category="environment_design" />
        <PartsWorks category="themepark" />
      </div>
    </div>
  )
}