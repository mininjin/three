import { atom, useRecoilState, useRecoilValue } from "recoil";

const ColorFromAtom = atom<string>({
  key: "ColorFromAAtom",
  default: "#f483f3",
});

const ColorToAtom = atom<string>({
  key: "ColorToAAtom",
  default: "#3129a1",
});

const AmountAtom = atom<number>({
  key: "ParticleAmountAAtom",
  default: 5000,
});

const PeriodAtom = atom<number>({
  key: "ParticlePeriodAAtom",
  default: 1,
});

const CircleAtom = atom<boolean>({
  key: "ParticleCircleAAtom",
  default: false,
});

export const useColorFromState = () => useRecoilState(ColorFromAtom);
export const useColorToState = () => useRecoilState(ColorToAtom);

export const useColorFromValue = () => useRecoilValue(ColorFromAtom);
export const useColorToValue = () => useRecoilValue(ColorToAtom);

export const useAmountState = () => useRecoilState(AmountAtom);
export const useAmountValue = () => useRecoilValue(AmountAtom);

export const usePeriodState = () => useRecoilState(PeriodAtom);
export const usePeriodValue = () => useRecoilValue(PeriodAtom);

export const useCircleState = () => useRecoilState(CircleAtom);
export const useCircleValue = () => useRecoilValue(CircleAtom);
