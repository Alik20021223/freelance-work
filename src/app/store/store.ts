import { create } from 'zustand'

type State = {
    open: boolean;
}

type Actions = {
    onOpenMenu: () => void;
}

export const useAppStore = create<State & Actions>((set) => ({
    open: false,  // Инициализация состояния
    onOpenMenu: () => set((state) => ({ open: !state.open })),
}));
