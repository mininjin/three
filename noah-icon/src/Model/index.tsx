import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particles from "./Particle";
import { useAmountValue, useColorFromValue, useColorToValue } from "../state";

type Props = {
  className?: string;
};

const Three: FC<Props> = ({ className }: Props) => {
  const from = useColorFromValue();
  const to = useColorToValue();
  const amount = useAmountValue();

  return (
    <Canvas className={className}>
      <color attach="background" args={["#000000"]} />
      <OrbitControls enablePan={false} />
      <gridHelper rotation-x={Math.PI / 2} />

      <Particles size={amount} colorFrom={from} colorTo={to} />
    </Canvas>
  );
};

export default Three;
