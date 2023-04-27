import { ChangeEvent, FC, useCallback } from "react";

type Props = {
  id: string;
  label: string;
  className?: string;
  amount: number;
  onInput: (s: number) => void;
  max: number;
  min: number;
  step: number;
};

const AmountConfig: FC<Props> = ({
  id,
  className = "",
  amount,
  onInput,
  max,
  min,
  step,
  label,
}) => {
  const handleInput = useCallback(
    (e: ChangeEvent) => {
      const v = e.target as HTMLInputElement;
      const value = Number(v.value);
      if (value <= max && value >= min) onInput(value);
    },
    [onInput]
  );

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <div className="flex space-x-1.5">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          step={step}
          value={amount}
          onChange={handleInput}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default AmountConfig;
