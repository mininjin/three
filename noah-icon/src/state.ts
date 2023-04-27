import { atom, useRecoilState, useRecoilValue } from "recoil";
import { localStorageEffect } from "./lib/state";

const BackgroundAtom = atom<string>({
  key: "BackgroundAtom",
  default: "#101827",
  effects: [localStorageEffect("ParticleBackgroundAtom")],
});

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

const SizeAtom = atom<number>({
  key: "ParticleSizeAtom",
  default: 1,
  effects: [localStorageEffect("ParticleSizeAtom")],
});

const SvgAtom = atom<string | null>({
  key: "SvgAtom",
  default: null,
  effects: [localStorageEffect("SvgAtom")],
});

const SvgScaleAtom = atom<number>({
  key: "SvgScaleAtom",
  default: 0.001,
  effects: [localStorageEffect("SvgScaleAtom")],
});

const SvgPositionAtom = atom<[number, number]>({
  key: "SvgPositionAtom",
  default: [0, 0],
  effects: [localStorageEffect("SvgPositionAtom")],
});

export const useBackgroundState = () => useRecoilState(BackgroundAtom);
export const useBackgroundValue = () => useRecoilValue(BackgroundAtom);

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

export const useSizeState = () => useRecoilState(SizeAtom);
export const useSizeValue = () => useRecoilValue(SizeAtom);

export const useSvgState = () => useRecoilState(SvgAtom);
export const useSvgValue = () => useRecoilValue(SvgAtom);

export const useSvgScaleState = () => useRecoilState(SvgScaleAtom);
export const useSvgScaleValue = () => useRecoilValue(SvgScaleAtom);

export const useSvgPositionState = () => useRecoilState(SvgPositionAtom);
export const useSvgPositionValue = () => useRecoilValue(SvgPositionAtom);
