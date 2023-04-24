import { FC } from "react";
import {
  useAmountValue,
  useCircleValue,
  useColorFromValue,
  useColorToValue,
  usePeriodValue,
} from "./state";
import Particles from "./components";
import Layout from "../../Layout";
import ModelConfig from "./components/Config";
import { Color, DoubleSide } from "three";

const ParticlesA: FC = () => {
  const from = useColorFromValue();
  const to = useColorToValue();
  const amount = useAmountValue();
  const period = usePeriodValue();
  const show = useCircleValue();

  return (
    <Layout config={<ModelConfig />}>
      {show && (
        <mesh>
          <ringGeometry args={[0.99, 1]} />
          <meshBasicMaterial color={new Color("#888888")} side={DoubleSide} />
        </mesh>
      )}
      <Particles period={period} size={amount} colorFrom={from} colorTo={to} />
    </Layout>
  );
};

export default ParticlesA;
