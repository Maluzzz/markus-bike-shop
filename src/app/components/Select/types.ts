import { PartType } from "@/app/lib/parts/types";


export type Props = {
    options: PartType[];
    label: string;
    onChange: (option:PartType ) => void;
}