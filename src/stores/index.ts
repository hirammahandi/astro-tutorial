import { create } from "zustand";

export type CounterProps = {
  counter: number;
};

export type CounterActions = {
  increment: () => void;
  decrement: () => void;
};

export const useCounter = create<CounterProps & CounterActions>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));
