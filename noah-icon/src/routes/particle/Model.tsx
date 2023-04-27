import { FC } from "react";
import {
  useAmountValue,
  useCircleValue,
  useColorFromValue,
  useColorToValue,
  useDistributionValue,
  usePeriodValue,
  useSizeValue,
} from "@/state";
import { Color, DoubleSide } from "three";

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

  return (
    <>
      {show && (
        <mesh>
          <ringGeometry args={[0.99, 1]} />
          <meshBasicMaterial color={new Color("#888888")} side={DoubleSide} />
        </mesh>
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
