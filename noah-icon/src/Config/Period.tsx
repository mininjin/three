import { ChangeEvent, FC, useCallback } from "react";

type Props = {
  className?: string;
  period: number;
  onInput: (s: number) => void;
};

const MAX = 100;
const MIN = 0.01;
const STEP = 1;

const PeriodConfig: FC<Props> = ({ className = "", period, onInput }) => {
  const handleInput = useCallback(
    (e: ChangeEvent) => {
      const v = e.target as HTMLInputElement;
      const value = Number(v.value);
      if (value <= MAX && value >= MIN) onInput(value);
    },
    [onInput]
  );

  return (
    <div className={`flex space-x-6 ${className}`}>
      <div className="flex space-x-1.5">
        <label htmlFor="red">回転周期</label>
        <input
          type="number"
          min={MIN}
          max={MAX}
          step={STEP}
          value={period}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default PeriodConfig;
