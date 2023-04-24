import { ChangeEvent, FC, useCallback } from "react";

type Props = {
  className?: string;
  amount: number;
  onInput: (s: number) => void;
};

const MAX = 10000;
const MIN = 100;
const STEP = 100;

const AmountConfig: FC<Props> = ({ className = "", amount, onInput }) => {
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
        <label htmlFor="red">粒子数</label>
        <input
          type="number"
          min={MIN}
          max={MAX}
          step={STEP}
          value={amount}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default AmountConfig;
