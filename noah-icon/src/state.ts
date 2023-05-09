import { atom, atomFamily, useRecoilState, useRecoilValue } from "recoil";
import { localStorageEffect } from "./lib/state";

export type DataType = "particle" | "curve";

const BackgroundAtom = atomFamily<string, DataType>({
  key: "BackgroundAtomFamily",
  default: "#101827",
  effects: [localStorageEffect("ParticleBackgroundAtomFamily")],
});

const ColorFromAtom = atomFamily<string, DataType>({
  key: "ColorFromAtomFamily",
  default: "#f483f3",
  effects: [localStorageEffect("ParticleColorFromAtomFamily")],
});

const ColorToAtom = atomFamily<string, DataType>({
  key: "ColorToAtomFamily",
  default: "#3129a1",
  effects: [localStorageEffect("ParticleColorFromAtomFamily")],
});

const AmountAtom = atomFamily<number, DataType>({
  key: "ParticleAmountAtomFamily",
  default: 5000,
  effects: [localStorageEffect("ParticleAmountAtomFamily")],
});

const PeriodAtom = atomFamily<number, DataType>({
  key: "ParticlePeriodAtomFamily",
  default: 1,
  effects: [localStorageEffect("ParticlePeriodAtomFamily")],
});

const SizeAtom = atomFamily<number, DataType>({
  key: "ParticleSizeAtomFamily",
  default: 1,
  effects: [localStorageEffect("ParticleSizeAtomFamily")],
});

const SvgAtom = atomFamily<string | null, DataType>({
  key: "SvgAtomFamily",
  default: null,
  effects: [localStorageEffect("SvgAtomFamily")],
});

const SvgScaleAtom = atomFamily<number, DataType>({
  key: "SvgScaleAtomFamily",
  default: 0.001,
  effects: [localStorageEffect("SvgScaleAtomFamily")],
});

const SvgPositionAtom = atomFamily<[number, number], DataType>({
  key: "SvgPositionAtomFamily",
  default: [0, 0],
  effects: [localStorageEffect("SvgPositionAtomFamily")],
});

const DistributionAtom = atom<number>({
  key: "ParticleDistributionAtom",
  default: 1,
  effects: [localStorageEffect("ParticleDistributionAtom")],
});

export const useBackgroundState = (type: DataType) =>
  useRecoilState(BackgroundAtom(type));
export const useBackgroundValue = (type: DataType) =>
  useRecoilValue(BackgroundAtom(type));

export const useColorFromState = (type: DataType) =>
  useRecoilState(ColorFromAtom(type));
export const useColorToState = (type: DataType) =>
  useRecoilState(ColorToAtom(type));

export const useColorFromValue = (type: DataType) =>
  useRecoilValue(ColorFromAtom(type));
export const useColorToValue = (type: DataType) =>
  useRecoilValue(ColorToAtom(type));

export const useAmountState = (type: DataType) =>
  useRecoilState(AmountAtom(type));
export const useAmountValue = (type: DataType) =>
  useRecoilValue(AmountAtom(type));

export const usePeriodState = (type: DataType) =>
  useRecoilState(PeriodAtom(type));
export const usePeriodValue = (type: DataType) =>
  useRecoilValue(PeriodAtom(type));

export const useDistributionState = () => useRecoilState(DistributionAtom);
export const useDistributionValue = () => useRecoilValue(DistributionAtom);

export const useSizeState = (type: DataType) => useRecoilState(SizeAtom(type));
export const useSizeValue = (type: DataType) => useRecoilValue(SizeAtom(type));

export const useSvgState = (type: DataType) => useRecoilState(SvgAtom(type));
export const useSvgValue = (type: DataType) => useRecoilValue(SvgAtom(type));

export const useSvgScaleState = (type: DataType) =>
  useRecoilState(SvgScaleAtom(type));
export const useSvgScaleValue = (type: DataType) =>
  useRecoilValue(SvgScaleAtom(type));

export const useSvgPositionState = (type: DataType) =>
  useRecoilState(SvgPositionAtom(type));
export const useSvgPositionValue = (type: DataType) =>
  useRecoilValue(SvgPositionAtom(type));
