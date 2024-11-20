import { create } from 'zustand';

export type selectionProps = {
    GenerationOfTwelveOrGenerationOfEight: number;
    number: React.ReactNode;
};

export const useSelectionStore = create((set) => ({
    GenerationOfTwelveOrGenerationOfEight: 0,
    selectionGeneration: (number: selectionProps) => set(() => ({ GenerationOfTwelveOrGenerationOfEight: number })),
}));