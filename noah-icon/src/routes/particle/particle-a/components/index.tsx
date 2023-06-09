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
import { getRGBFromColorCode } from "@/lib/color";
import { fragmentShader, vertexShader } from "./shaders";
import { ParticleProps } from "../../Model";

const Particles: FC<ParticleProps> = ({
  amount,
  size,
  colorFrom,
  colorTo,
  period,
  rotate = 0,
}) => {
  const points = useRef<Points<SphereGeometry, ShaderMaterial>>(null);
  const attributes = useMemo(() => {
    const seeds = Array(amount)
      .fill(0)
      .map((_, i) => i / amount);
    const positions = seeds.reduce<number[]>((arr, i) => {
      const theta = 2 * Math.PI * i;
      const r = 0.1 + 0.9 * Math.random();
      return arr.concat([r * Math.cos(theta), r * Math.sin(theta), 0]);
    }, []);
    const fromHex = getRGBFromColorCode(colorFrom);
    const toHex = getRGBFromColorCode(colorTo);
    const colors = Array(amount)
      .fill(0)
      .reduce<number[]>((arr, _, i) => {
        const t = i / amount;
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
    const seed = new Float32BufferAttribute(seeds, 1);
    return { position, color, seed };
  }, [colorFrom, colorTo, amount]);

  const u_period = useRef(period);
  const u_size = useRef(size);
  const uniforms = useMemo<Record<string, IUniform>>(
    () => ({
      u_size: { value: u_size.current },
      u_time: { value: 0.0 },
      u_dt: { value: 0.0 },
      u_period: { value: u_period.current },
      u_rotate: { value: rotate },
    }),
    [rotate]
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
      points.current.material.uniforms.u_period.value = u_period.current;
      points.current.material.uniforms.u_size.value = u_size.current;
    }
  });

  useEffect(() => {
    if (init.current) {
      init.current = false;
    }
  }, [colorFrom, colorTo]);

  useEffect(() => {
    u_period.current = period;
    u_size.current = size;
  }, [period, size]);

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
