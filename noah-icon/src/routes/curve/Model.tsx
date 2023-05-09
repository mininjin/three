import { FC, useMemo } from "react";
import SvgPath from "@/components/Svg";
import { useSvgPositionValue, useSvgScaleValue, useSvgValue } from "@/state";
import { loadPathDataFromSvg } from "@/lib/loader";
import { Vector3 } from "three";

export type CurveProps = {
  amount: number;
  size: number;
  period: number;
  colorFrom: string;
  colorTo: string;
  rotate?: number;
};

type Props = {
  curve: FC<CurveProps>;
};

const ParticleModelData: FC<Props> = ({}) => {
  const svg = useSvgValue("curve");
  const paths = useMemo(() => (svg ? loadPathDataFromSvg(svg) : []), [svg]);
  const svgScale = useSvgScaleValue("curve");
  const svgScaleVec = useMemo(
    () => new Vector3(svgScale, svgScale, svgScale),
    [svgScale]
  );
  const svgPosition = useSvgPositionValue("curve");
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

      <group></group>
    </>
  );
};

export default ParticleModelData;
