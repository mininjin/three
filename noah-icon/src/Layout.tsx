import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Color } from "three";

type Props = {
  children: React.ReactNode;
  config: React.ReactNode;
};

function Layout({ children, config }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-start">
      <div className="h-full w-[80%]">
        <Canvas>
          <color attach="background" args={["#101827"]} />
          <OrbitControls enablePan={false} />
          {/* <gridHelper rotation-x={Math.PI / 2} /> */}
          <ambientLight intensity={0.5} color={new Color("#101827")} />
          <pointLight
            position={[0, 0, 1]}
            intensity={1.5}
            color={new Color("#101827")}
          />

          {children}
        </Canvas>
      </div>

      {config}
    </div>
  );
}

export default Layout;
