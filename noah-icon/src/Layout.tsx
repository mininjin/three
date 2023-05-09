import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Color } from "three";
import Header from "./components/Header";
import { DataType, useBackgroundValue } from "./state";

type Props = {
  children: React.ReactNode;
  config: React.ReactNode;
  type: DataType;
};

function Layout({ children, config, type }: Props) {
  const background = useBackgroundValue(type);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-stretch">
      <Header />
      <div className="flex-1 min-h-0 flex items-start">
        <div className="h-full w-[80%]">
          <Canvas>
            <color attach="background" args={[background]} />
            <OrbitControls
              enablePan={false}
              enableRotate={false}
              enableZoom={false}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} color={new Color("#101827")} />
            <pointLight
              position={[0, 0, 1]}
              intensity={1.5}
              color={new Color("#101827")}
            />

            {children}
          </Canvas>
        </div>

        <div className="h-full overflow-y-scroll">{config}</div>
      </div>
    </div>
  );
}

export default Layout;
