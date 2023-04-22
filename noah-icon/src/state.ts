import { atom, useRecoilState, useRecoilValue } from "recoil";

const ColorFromAtom = atom<string>({
  key: "ColorFromAtom",
  default: "#f483f3",
});

const ColorToAtom = atom<string>({
  key: "ColorToAtom",
  default: "#3129a1",
});

const AmountAtom = atom<number>({
  key: "ParticleAmountAtom",
  default: 1000,
});

export const useColorFromState = () => useRecoilState(ColorFromAtom);
export const useColorToState = () => useRecoilState(ColorToAtom);

export const useColorFromValue = () => useRecoilValue(ColorFromAtom);
export const useColorToValue = () => useRecoilValue(ColorToAtom);

export const useAmountState = () => useRecoilState(AmountAtom);
export const useAmountValue = () => useRecoilValue(AmountAtom);
