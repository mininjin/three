import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particles from "./Particle";
import { useAmountValue, useColorFromValue, useColorToValue } from "../state";
import { Color } from "three";

type Props = {
  className?: string;
};

const Three: FC<Props> = ({ className }: Props) => {
  const from = useColorFromValue();
  const to = useColorToValue();
  const amount = useAmountValue();

  return (
    <Canvas className={className}>
      <color attach="background" args={["#101827"]} />
      <OrbitControls enablePan={false} />
      <gridHelper rotation-x={Math.PI / 2} />
      <ambientLight intensity={0.5} color={new Color("#101827")} />
      <pointLight
        position={[0, 0, 1]}
        intensity={1.5}
        color={new Color("#101827")}
      />

      <Particles size={amount} colorFrom={from} colorTo={to} />
    </Canvas>
  );
};

export default Three;
