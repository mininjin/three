import { useThree } from "@react-three/fiber";
import { FC, useEffect } from "react";
import Particles from "./particles";
import {
  useAmountValue,
  useColorFromValue,
  useColorToValue,
  useDistributionValue,
  usePeriodValue,
} from "../state";

const ModelData: FC = () => {
  const { invalidate } = useThree();
  const from = useColorFromValue();
  const to = useColorToValue();
  const amount = useAmountValue();
  const period = usePeriodValue();

  const length = useDistributionValue();

  useEffect(() => {
    const timeout = setTimeout(() => {
      invalidate();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [length]);

  return (
    <group>
      {Array(length)
        .fill(null)
        .map((_, i) => (
          <Particles
            key={i}
            rotate={(Math.PI * 2 * i) / length}
            period={period}
            size={Math.floor(amount / length)}
            colorFrom={from}
            colorTo={to}
          />
        ))}
    </group>
  );
};

export default ModelData;
