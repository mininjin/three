import { ChangeEvent, FC, useCallback } from "react";
import { useDistributionState } from "../../state";

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

  const [distribution, setDistribution] = useDistributionState();
  const handleInputDist = useCallback(
    (e: ChangeEvent) => {
      const v = e.target as HTMLInputElement;
      const value = Number(v.value);
      if (value <= 10 && value >= 1) {
        setDistribution(value);
      }
    },
    [onInput]
  );

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <div className="flex space-x-1.5">
        <label htmlFor="red">粒子数</label>
        <input
          type="number"
          min={MIN}
          max={MAX}
          step={STEP}
          value={amount}
          onChange={handleInput}
          className="w-24"
        />
      </div>
      <div className="flex space-x-1.5">
        <label htmlFor="red">分割数</label>
        <input
          type="number"
          min={1}
          max={10}
          step={1}
          value={distribution}
          onChange={handleInputDist}
        />
      </div>
    </div>
  );
};

export default AmountConfig;
