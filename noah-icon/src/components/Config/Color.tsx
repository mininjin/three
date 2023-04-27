import { ChangeEvent, FC, useCallback, useMemo } from "react";
import {
  getColorCodeFromRGB,
  getHefFromColorCode,
  getRGBFromHex,
} from "../../lib/color";

type Props = {
  id: string;
  className?: string;
  color: string;
  onInput: (s: string) => void;
};

const ColorConfig: FC<Props> = ({ id, className = "", color, onInput }) => {
  const { r, g, b } = useMemo(() => {
    const rgb = getRGBFromHex(getHefFromColorCode(color));
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
  }, [color]);

  const handleInput = useCallback(
    (axis: 0 | 1 | 2, e: ChangeEvent) => {
      const v = e.target as HTMLInputElement;
      const value = Number(v.value);
      const rgb = [r, g, b] as [number, number, number];
      rgb[axis] = value;
      onInput(getColorCodeFromRGB(rgb));
    },
    [color, onInput]
  );

  const handleHexInput = useCallback(
    (e: ChangeEvent) => {
      const v = e.target as HTMLInputElement;
      const value = v.value;
      if (/#[a-fA-f0-9]{6}/.test(value)) onInput(value);
    },
    [color, onInput]
  );

  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <div className="flex space-x-1.5">
        <label className="w-12" htmlFor={`${id}-red`}>Red</label>
        <input
          id={`${id}-red`}
          type="range"
          min="0"
          max="255"
          value={r}
          onChange={handleInput.bind(null, 0)}
        />
      </div>
      <div className="flex space-x-1.5">
        <label className="w-12" htmlFor={`${id}-green`}>Green</label>
        <input
          id={`${id}-green`}
          type="range"
          min="0"
          max="255"
          value={g}
          onChange={handleInput.bind(null, 1)}
        />
      </div>
      <div className="flex space-x-1.5">
        <label className="w-12" htmlFor={`${id}-blue`}>Blue</label>
        <input
          id={`${id}-blue`}
          type="range"
          min="0"
          max="255"
          value={b}
          onChange={handleInput.bind(null, 2)}
        />
      </div>

      <div className="flex items-center space-x-1.5">
        <div className="w-6 aspect-square" style={{ background: color }}></div>
        <input type="text" value={color} onChange={handleHexInput} />
      </div>
    </div>
  );
};

export default ColorConfig;
