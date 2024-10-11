"use client";

import { CompareDemo } from '@/components/compare_slider/compare_slider';
import React from "react";
import { FlipWordsDemo } from '@/components/flipwords/flipwords';

export default function Home() {
  return (
    <div className="relative h-full w-full bg-slate-950">

        
          {/* Captions */}
          <div className="relative flex justify-between w-[60%] mx-auto mb-0">
            <p className="font-bold text-3xl text-white">Life without drugs</p>
            <p className="font-bold text-3xl text-white">Life with drugs</p>
          </div>

          {/* Compare Demo */}
          <div className="w-[60%] mx-auto -mt-1">
            <CompareDemo />
          </div>

          <FlipWordsDemo />
        
      
    </div>
  );
}
