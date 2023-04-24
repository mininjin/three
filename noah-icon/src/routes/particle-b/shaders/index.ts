import mainVertex from "./vertex/main.glsl?raw";
import noiseVertex from "./vertex/noise.glsl?raw";
import fragmentShader from "./fragment.glsl?raw";

const vertexShader = [mainVertex, noiseVertex].join("\n");

export { fragmentShader, vertexShader };
