import { ChangeEvent, FC, useCallback } from "react";
import { useCircleState } from "../../state";

type Props = {
  className?: string;
};

const CircleConfig: FC<Props> = ({ className = "" }) => {
  const [show, setShow] = useCircleState();

  const handleInput = useCallback(
    (e: ChangeEvent) => {
      const v = e.target as HTMLInputElement;
      setShow(v.checked);
    },
    [setShow]
  );

  return (
    <div className={`flex space-x-6 ${className}`}>
      <div className="flex space-x-1.5">
        <label htmlFor="circle-show">外周円</label>
        <input
          id="circle-show"
          type="checkbox"
          checked={show}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default CircleConfig;
