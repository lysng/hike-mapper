"use client"

import { Slider } from "@/components/ui/slider"
import { Label } from "@radix-ui/react-label"
import { SliderProps } from "@radix-ui/react-slider";
import { useState } from "react";

interface FilterSliderProps {
    filterName: string;
    defaultValue: SliderProps["defaultValue"];
    maxAmount: number;
    step?: number;
}

export function FilterSlider({ filterName, defaultValue, maxAmount, step = 1 }: FilterSliderProps) {
    const [value, setValue] = useState(defaultValue);

    return (
        <div className="grid gap-4 px-3 py-3 w-full">
            <div className="grid gap-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="filter-slider">{filterName}</Label>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        {value}
                    </span>
                </div>
            </div>
            <Slider
                id={`${filterName}-slider`}
                max={maxAmount}
                step={step}
                defaultValue={value}
                onValueChange={setValue}
                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                aria-label={`${filterName} Slider`}
            />
        </div>
    )
}