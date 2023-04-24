import { FC } from "react";
import Layout from "../../Layout";
import ModelConfig from "./components/Config";
import ModelData from "./components";

const ParticlesB: FC = () => {
  return (
    <Layout config={<ModelConfig />}>
      <ModelData />
    </Layout>
  );
};

export default ParticlesB;
