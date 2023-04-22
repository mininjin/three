import { FC } from "react";
import { Canvas } from "@react-three/fiber";

type Props = {
  className?: string;
};

const Three: FC<Props> = ({ className }: Props) => {
  return (
    <Canvas className={className}>
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};

export default Three;
