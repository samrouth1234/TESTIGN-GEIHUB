import Tab from "@/components/Tab";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center ">
      <div className=" w-[1000px] h-full">
        <video class="w-full" autoplay muted controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Tab />
      </div>
    </div>
  );
}
