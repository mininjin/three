import { FC } from "react";
import {
  useAmountState,
  useColorFromState,
  useColorToState,
  usePeriodState,
} from "../../state";
import ColorConfig from "./Color";
import AmountConfig from "./Amount";
import PeriodConfig from "./Period";
import CircleConfig from "./Circle";

type Props = {
  className?: string;
};

const ModelConfig: FC<Props> = ({ className = "" }) => {
  const [from, handleSetFrom] = useColorFromState();
  const [to, handleSetTo] = useColorToState();
  const [amount, handleSetAmount] = useAmountState();
  const [period, handleSetPeriod] = usePeriodState();

  return (
    <div className={`flex flex-col space-y-6 ${className}`}>
      <ColorConfig color={from} onInput={handleSetFrom} />
      <ColorConfig color={to} onInput={handleSetTo} />
      <AmountConfig amount={amount} onInput={handleSetAmount} />
      <PeriodConfig period={period} onInput={handleSetPeriod} />
      <CircleConfig />
    </div>
  );
};

export default ModelConfig;
