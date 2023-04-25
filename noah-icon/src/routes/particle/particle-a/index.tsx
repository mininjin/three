import { FC } from "react";
import Particles from "./components";
import Layout from "@/Layout";
import ModelConfig from "@/components/Config";
import ParticleModelData from "../Model";

const ParticlesA: FC = () => {
  return (
    <Layout config={<ModelConfig />}>
      <ParticleModelData particle={Particles} />
    </Layout>
  );
};

export default ParticlesA;
