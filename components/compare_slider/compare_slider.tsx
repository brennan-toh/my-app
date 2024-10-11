import React from "react";
import { Compare } from "@/components/ui/compare";
import happykanye from "@/components/compare_slider/3r6via77zl5b1.jpg";
import sadkanye from "@/components/compare_slider/517625.jpeg";


export function CompareDemo() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Compare
        firstImage='https://i.redd.it/3r6via77zl5b1.jpg'
        secondImage='https://i.pinimg.com/736x/0e/0b/bd/0e0bbda7023328cc8065b90420e5ede7.jpg'
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
