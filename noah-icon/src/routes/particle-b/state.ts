import { atom, useRecoilState, useRecoilValue } from "recoil";

const ColorFromAtom = atom<string>({
  key: "ColorFromBAtom",
  default: "#f483f3",
});

const ColorToAtom = atom<string>({
  key: "ColorToBAtom",
  default: "#3129a1",
});

const AmountAtom = atom<number>({
  key: "ParticleAmountBAtom",
  default: 5000,
});

const PeriodAtom = atom<number>({
  key: "ParticlePeriodBAtom",
  default: 1,
});

export const useColorFromState = () => useRecoilState(ColorFromAtom);
export const useColorToState = () => useRecoilState(ColorToAtom);

export const useColorFromValue = () => useRecoilValue(ColorFromAtom);
export const useColorToValue = () => useRecoilValue(ColorToAtom);

export const useAmountState = () => useRecoilState(AmountAtom);
export const useAmountValue = () => useRecoilValue(AmountAtom);

export const usePeriodState = () => useRecoilState(PeriodAtom);
export const usePeriodValue = () => useRecoilValue(PeriodAtom);
