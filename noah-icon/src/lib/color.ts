type RGB = [number, number, number];

export const getHefFromColorCode = (colorCode: string) => {
  const hex = colorCode.replace(/^#/, "");
  return parseInt(hex, 16);
};

export const getRGBFromHex = (hex: number): RGB => {
  const r = (hex >> 16) & 0xff;
  const g = (hex >> 8) & 0xff;
  const b = hex & 0xff;
  return [r, g, b];
};

export const getRGBFromColorCode = (colorCode: string): RGB => {
  const hex = getHefFromColorCode(colorCode);
  return getRGBFromHex(hex);
};

export const getColorCodeFromRGB = (rgb: RGB) => {
  const [r, g, b] = rgb;
  const getHex = (num: number) => {
    const hex = `0${num.toString(16)}`.slice(-2);
    return hex;
  };
  return `#${getHex(r)}${getHex(g)}${getHex(b)}`;
};
