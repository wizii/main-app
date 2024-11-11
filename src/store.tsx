import { create } from 'zustand';

type State = {
  selectedCorporateId: string;
}

type Action = {
  updateSelectedCorporateId: (selectedCorporateId: State['selectedCorporateId']) => void
}

const useStore = create<State & Action>((set) => ({
  selectedCorporateId: '',
  updateSelectedCorporateId: (selectedCorporateId) => set(() => ({ selectedCorporateId: selectedCorporateId })),
}));

export default useStore;