import { FC } from "react";
import {
  useAmountValue,
  useColorFromValue,
  useColorToValue,
  usePeriodValue,
} from "./state";
import Particles from "./components";
import Layout from "../../Layout";
import ModelConfig from "./components/Config";

const ParticlesB: FC = () => {
  const from = useColorFromValue();
  const to = useColorToValue();
  const amount = useAmountValue();
  const period = usePeriodValue();

  return (
    <Layout config={<ModelConfig />}>
      <Particles period={period} size={amount} colorFrom={from} colorTo={to} />
    </Layout>
  );
};

export default ParticlesB;
