import { FC } from "react";
import Layout from "@/Layout";
import ModelData from "@/routes/particle/Model";
import ModelConfig from "@/routes/particle/Config";
import Particles from "./components/particles";

const ParticlesB: FC = () => {
  return (
    <Layout type="particle" config={<ModelConfig />}>
      <ModelData particle={Particles} />
    </Layout>
  );
};

export default ParticlesB;
