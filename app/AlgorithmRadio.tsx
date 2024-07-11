"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

import { create } from "zustand";
type Store = {
  algorithm: "institution" | "genuine";
  change: (value: "institution" | "genuine") => void;
};
export const useStore = create<Store>()((set) => ({
  algorithm: "genuine",
  change: (value: "institution" | "genuine") =>
    set((state) => ({ algorithm: value })),
}));

export function AlgorithmRadio() {
  const { algorithm, change } = useStore();

  function onChange(value: "institution" | "genuine") {
    change(value);
    toast({
      title: "Calculations algorithm changed to " + value,
    });
  }

  return (
    <div className="space-y-6 my-4 p-2 border-green-600 border-2 border-dashed rounded-md">
      <div className="space-y-3">
        <RadioGroup
          onValueChange={onChange}
          defaultValue={algorithm}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-start  space-x-3 space-y-0">
            <div>
              <RadioGroupItem value="institution" />
            </div>
            <div className="font-normal">
              Institution Algorithm ( students with same score will not get the
              same rank )
            </div>
          </div>
          <div className="flex items-start space-x-3 space-y-0">
            <div>
              <RadioGroupItem value="genuine" />
            </div>
            <div className="font-normal">
              Genuine Algorithm ( students with same score will get the same
              rank, all without breaking the ranking flow of total students)
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
