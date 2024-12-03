import { PartType } from "@/app/lib/parts/types";


export type Props = {
    options: PartType[];
    label: string;
    disableOptions: string[];
    onChange: (option:PartType ) => void;
}