import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useMemo, useRef } from "react";
import {
  Float32BufferAttribute,
  IUniform,
  Points,
  ShaderMaterial,
  SphereGeometry,
  Uint8BufferAttribute,
} from "three";
import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from "./shaders/fragment.glsl?raw";
import { getRGBFromColorCode } from "../../lib/color";

type Props = {
  size: number;
  colorFrom: string;
  colorTo: string;
};

const Particles: FC<Props> = ({ size, colorFrom, colorTo }) => {
  const points = useRef<Points<SphereGeometry, ShaderMaterial>>(null);
  const attributes = useMemo(() => {
    const positions = Array(size)
      .fill(0)
      .reduce<number[]>((arr, _, i) => {
        const r = 0.9 + 0.3 * Math.random();
        const theta = (Math.PI / 2) * (1 - i / size);
        return arr.concat([r * Math.cos(theta), r * Math.sin(theta), 0]);
      }, []);
    const fromHex = getRGBFromColorCode(colorFrom);
    const toHex = getRGBFromColorCode(colorTo);
    const colors = Array(size)
      .fill(0)
      .reduce<number[]>((arr, _, i) => {
        const t = i / size;
        const rgb = Array(3)
          .fill(0)
          .map((_, i) => {
            const from = fromHex[i];
            const to = toHex[i];
            return (to - from) * ((1 - Math.sin(2 * Math.PI * t)) / 2) + from;
          });
        return arr.concat([...rgb, 255]);
      }, []);
    const thetas = Array(size)
      .fill(0)
      .map((_, i) => Math.PI * (1 - i / size));
    const position = new Float32BufferAttribute(positions, 3);
    const color = new Uint8BufferAttribute(colors, 4, true);
    const theta = new Float32BufferAttribute(thetas, 1);
    return { position, color, theta };
  }, [colorFrom, colorTo, size]);

  const uniforms = useMemo<Record<string, IUniform>>(
    () => ({
      u_time: { value: 0.0 },
      u_size: { value: 5.0 },
      u_focus_0: { value: [1, 0] },
      u_focus_1: { value: [-1, 0] },
      u_radius_delta: { value: 0.8 },
      u_rotation_velocity: { value: 0.75 },
      u_radius_velocity: { value: 3 },
    }),
    []
  );

  const init = useRef(false);
  useFrame((state) => {
    if (!init.current) {
      state.clock.start();
      init.current = true;
    }

    if (points.current?.material.uniforms) {
      const { clock } = state;
      points.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  useEffect(() => {
    if (init.current) {
      init.current = false;
    }
  }, [colorFrom, colorTo]);

  return (
    <points ref={points}>
      <bufferGeometry attributes={attributes} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default Particles;
