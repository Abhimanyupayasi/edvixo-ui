export interface StepItem {
    id?: string;
    img?: string;
    title: string;
    description: string;
    altImageText?: string;
    isActive?: boolean;
    sequenceNo?: number;
}
export interface StepsProductProps {
    data: StepItem[];
    baseUrl?: string;
    title?: string;
}
export default function StepsProduct({ data, baseUrl, title, }: StepsProductProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StepsProduct.d.ts.map