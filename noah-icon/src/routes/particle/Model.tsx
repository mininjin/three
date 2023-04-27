import { FC, useMemo } from "react";
import {
  useAmountValue,
  useCircleValue,
  useColorFromValue,
  useColorToValue,
  useDistributionValue,
  usePeriodValue,
  useSizeValue,
  useSvgPositionValue,
  useSvgScaleValue,
  useSvgValue,
} from "@/state";
import { Color, DoubleSide, Vector3 } from "three";
import SvgPath from "./Svg";
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
  const from = useColorFromValue();
  const to = useColorToValue();
  const amount = useAmountValue();
  const period = usePeriodValue();
  const size = useSizeValue();

  const length = useDistributionValue();
  const show = useCircleValue();

  const svg = useSvgValue();
  const paths = useMemo(() => (svg ? loadPathDataFromSvg(svg) : []), [svg]);
  const svgScale = useSvgScaleValue();
  const svgScaleVec = useMemo(
    () => new Vector3(svgScale, svgScale, svgScale),
    [svgScale]
  );
  const svgPosition = useSvgPositionValue();
  const svgPositionVec = useMemo(
    () => new Vector3(...svgPosition, 0),
    [svgPosition]
  );

  return (
    <>
      {show && (
        <mesh>
          <ringGeometry args={[0.99, 1]} />
          <meshBasicMaterial color={new Color("#888888")} side={DoubleSide} />
        </mesh>
      )}

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
