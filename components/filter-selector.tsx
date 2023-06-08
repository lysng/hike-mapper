import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface FilterSelectorProps {
    selectorTitle: string;
    data: string[];

}

export function FilterSelector({ selectorTitle, data }: FilterSelectorProps) {



    return (
        <div className="grid gap-4 px-3 py-3 w-full">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder={`Select a ${selectorTitle}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {data.map(data => (<SelectItem value={data}>{data}</SelectItem>))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div >
    )
}