import { FC, useMemo } from "react";
import {
  useAmountValue,
  useColorFromValue,
  useColorToValue,
  useDistributionValue,
  usePeriodValue,
  useSizeValue,
  useSvgPositionValue,
  useSvgScaleValue,
  useSvgValue,
} from "@/state";
import { Vector3 } from "three";
import SvgPath from "../../components/Svg";
import { loadPathDataFromSvg } from "@/lib/loader";

export type ParticleProps = {
  amount: number;
  size: number;
  period: number;
  colorFrom: string;
  colorTo: string;
  rotate?: number;
};

type Props = {
  particle: FC<ParticleProps>;
};

const ParticleModelData: FC<Props> = ({ particle: Particles }) => {
  const from = useColorFromValue("particle");
  const to = useColorToValue("particle");
  const amount = useAmountValue("particle");
  const period = usePeriodValue("particle");
  const size = useSizeValue("particle");

  const length = useDistributionValue();

  const svg = useSvgValue("particle");
  const paths = useMemo(() => (svg ? loadPathDataFromSvg(svg) : []), [svg]);
  const svgScale = useSvgScaleValue("particle");
  const svgScaleVec = useMemo(
    () => new Vector3(svgScale, svgScale, svgScale),
    [svgScale]
  );
  const svgPosition = useSvgPositionValue("particle");
  const svgPositionVec = useMemo(
    () => new Vector3(...svgPosition, 0),
    [svgPosition]
  );

  return (
    <>
      {paths.length > 0 && (
        <group scale={svgScaleVec} position={svgPositionVec}>
          {paths.map((path, i) => (
            <SvgPath key={`${Date.now()}-${i}`} path={path} />
          ))}
        </group>
      )}

      <group>
        {Array(length)
          .fill(null)
          .map((_, i) => (
            <Particles
              key={`${Date.now()}-${i}`}
              rotate={(Math.PI * 2 * i) / length}
              period={period}
              amount={Math.floor(amount / length)}
              size={size}
              colorFrom={from}
              colorTo={to}
            />
          ))}
      </group>
    </>
  );
};

export default ParticleModelData;
