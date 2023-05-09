import { FC } from "react";
import Particles from "./components";
import Layout from "@/Layout";
import ModelConfig from "@/routes/particle/Config";
import ParticleModelData from "../Model";

const ParticlesC: FC = () => {
  return (
    <Layout type="particle" config={<ModelConfig />}>
      <ParticleModelData particle={Particles} />
    </Layout>
  );
};

export default ParticlesC;
