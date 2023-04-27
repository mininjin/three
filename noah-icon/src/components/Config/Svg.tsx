import { loadTextFromSvg } from "@/lib/loader";
import { useSvgPositionState, useSvgScaleState, useSvgState } from "@/state";
import { ChangeEvent, FC, useCallback } from "react";

type Props = {
  className?: string;
};

const SvgConfig: FC<Props> = ({ className = "" }) => {
  const [file, onInput] = useSvgState();
  const [scale, setScale] = useSvgScaleState();
  const [position, setPosition] = useSvgPositionState();
  const handleInput = useCallback(
    async (e?: ChangeEvent) => {
      const v = e?.target as HTMLInputElement | undefined;
      const file = v?.files?.[0];
      if (file) {
        const svg = await loadTextFromSvg(file);
        onInput(svg);
      }
    },
    [onInput]
  );
  const handleInputScale = useCallback(
    async (e: ChangeEvent) => {
      const v = e?.target as HTMLInputElement | undefined;
      const value = Number(v?.value);
      if (!isNaN(value)) {
        setScale(value);
      }
    },
    [setScale]
  );
  const handleInputPosition = useCallback(
    async (index: number, e: ChangeEvent) => {
      const v = e?.target as HTMLInputElement | undefined;
      const value = Number(v?.value);
      if (!isNaN(value)) {
        const p = [...position] as [number, number];
        p[index] = value;
        console.info(p);
        setPosition(p);
      }
    },
    [setPosition, position]
  );

  const handleRemove = onInput.bind(undefined, null);

  return (
    <div className={`flex flex-col space-x-1.5 ${className}`}>
      <div className="flex space-x-1.5">
        <label htmlFor="svg" className="border p-0.5 border-primary rounded-lg">
          SVGファイル
        </label>
        <input
          id="svg"
          type="file"
          accept="image/svg+xml"
          onChange={handleInput}
          className="hidden"
        />
        {file && (
          <button type="button" className="p-1.5 border" onClick={handleRemove}>
            削除
          </button>
        )}
      </div>
      {file && (
        <>
          <div className="flex space-x-1.5">
            <label htmlFor="svg-scale">SVGのサイズ</label>
            <input
              id="svg-scale"
              type="number"
              value={scale}
              min={0.00000001}
              step={0.001}
              onChange={handleInputScale}
              className="w-24"
            />
          </div>
          <div className="flex space-x-1.5">
            <label>SVGのx位置</label>
            <input
              type="number"
              value={position[0]}
              min={-10}
              max={10}
              step={0.01}
              onChange={handleInputPosition.bind(undefined, 0)}
              className="w-24"
            />
          </div>
          <div className="flex space-x-1.5">
            <label>SVGのy位置</label>
            <input
              type="number"
              value={position[1]}
              min={-10}
              max={10}
              step={0.01}
              onChange={handleInputPosition.bind(undefined, 1)}
              className="w-24"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SvgConfig;
