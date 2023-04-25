import { FC } from "react";
import Layout from "@/Layout";
import ModelData from "@/routes/particle/Model";
import ModelConfig from "@/components/Config";
import Particles from "./components/particles";

const ParticlesB: FC = () => {
  return (
    <Layout config={<ModelConfig />}>
      <ModelData particle={Particles} />
    </Layout>
  );
};

export default ParticlesB;
