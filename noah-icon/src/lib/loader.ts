import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

export const loadPathDataFromSvg = (svg: string) => {
  const loader = new SVGLoader();
  const data = loader.parse(svg);
  return data.paths;
};

export const loadTextFromSvg = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      const text = e.target?.result as string;
      resolve(text);
    });
    reader.addEventListener("error", (e) => {
      reject(e);
    });

    reader.readAsText(file);
  });
};
