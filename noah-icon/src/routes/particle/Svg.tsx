import { useMemo } from "react";
import { DoubleSide } from "three";
import {
  SVGLoader,
  SVGResultPaths,
} from "three/examples/jsm/loaders/SVGLoader.js";

type Props = {
  path: SVGResultPaths;
};

const SvgPath: React.FC<Props> = ({ path }) => {
  const shapes = useMemo(() => SVGLoader.createShapes(path), [path]);

  return (
    <>
      {shapes.map((shape) => (
        <mesh>
          <shapeGeometry args={[shape]} />
          <meshBasicMaterial
            color={path.color}
            side={DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
};

export default SvgPath;
