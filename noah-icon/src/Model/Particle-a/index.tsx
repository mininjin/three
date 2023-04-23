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
import { getRGBFromColorCode } from "../../lib/color";
import { fragmentShader, vertexShader } from "./shaders";

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
        const r = Math.random();
        const theta = ((1 / 2) * (Math.PI * i)) / size;
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
    const position = new Float32BufferAttribute(positions, 3);
    const color = new Uint8BufferAttribute(colors, 4, true);
    return { position, color };
  }, [colorFrom, colorTo, size]);

  const uniforms = useMemo<Record<string, IUniform>>(
    () => ({
      u_size: { value: 2.0 },
      u_time: { value: 0.0 },
      u_dt: { value: 0.0 },
      u_period: { value: 10 },
      u_time_randomness: { value: 0.01 },
      u_radius_velocity: { value: 100 },
      u_theta_velocity: { value: 0.001 },
      u_min_radius: { value: 0.5 },
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
      const time = clock.getElapsedTime();
      points.current.material.uniforms.u_time.value = time;
      points.current.material.uniforms.u_dt.value = time - state.clock.oldTime;
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
