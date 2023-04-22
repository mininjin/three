import { FC } from "react";
import { useAmountState, useColorFromState, useColorToState } from "../state";
import ColorConfig from "./Color";
import AmountConfig from "./Amount";

type Props = {
  className?: string;
};

const ModelConfig: FC<Props> = ({ className = "" }) => {
  const [from, handleSetFrom] = useColorFromState();
  const [to, handleSetTo] = useColorToState();
  const [amount, handleSetAmount] = useAmountState();

  return (
    <div className={`flex flex-col ${className}`}>
      <ColorConfig color={from} onInput={handleSetFrom} />
      <ColorConfig color={to} onInput={handleSetTo} />
      <AmountConfig amount={amount} onInput={handleSetAmount} />
    </div>
  );
};

export default ModelConfig;
