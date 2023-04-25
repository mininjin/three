import { atom, useRecoilState, useRecoilValue } from "recoil";
import { localStorageEffect } from "./lib/state";

const ColorFromAtom = atom<string>({
  key: "ColorFromAtom",
  default: "#f483f3",
  effects: [localStorageEffect("ParticleColorFromAtom")],
});

const ColorToAtom = atom<string>({
  key: "ColorToAtom",
  default: "#3129a1",
  effects: [localStorageEffect("ParticleColorFromAtom")],
});

const AmountAtom = atom<number>({
  key: "ParticleAmountAtom",
  default: 5000,
  effects: [localStorageEffect("ParticleAmountAtom")],
});

const PeriodAtom = atom<number>({
  key: "ParticlePeriodAtom",
  default: 1,
  effects: [localStorageEffect("ParticlePeriodAtom")],
});

const CircleAtom = atom<boolean>({
  key: "ParticleCircleAtom",
  default: false,
  effects: [localStorageEffect("ParticleCircleAtom")],
});

const DistributionAtom = atom<number>({
  key: "ParticleDistributionAtom",
  default: 1,
  effects: [localStorageEffect("ParticleDistributionAtom")],
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

export const useDistributionState = () => useRecoilState(DistributionAtom);
export const useDistributionValue = () => useRecoilValue(DistributionAtom);