import { FC } from "react";
import {
  useAmountState,
  useBackgroundState,
  useColorFromState,
  useColorToState,
  usePeriodState,
  useSizeState,
} from "@/state";
import ColorConfig from "@/components/Config/Color";
import AmountConfig from "@/components/Config/Amount";
import PeriodConfig from "@/components/Config/Period";
import SvgConfig from "@/components/Config/Svg";

type Props = {
  className?: string;
};

const ModelConfig: FC<Props> = ({ className = "" }) => {
  const [background, handleSetBackground] = useBackgroundState("curve");
  const [from, handleSetFrom] = useColorFromState("curve");
  const [to, handleSetTo] = useColorToState("curve");
  const [amount, handleSetAmount] = useAmountState("curve");
  const [size, handleSetSize] = useSizeState("curve");
  const [period, handleSetPeriod] = usePeriodState("curve");

  return (
    <div className={`flex flex-col space-y-6 px-3 ${className}`}>
      <ColorConfig
        id="background"
        color={background}
        onInput={handleSetBackground}
      />
      <ColorConfig id="from" color={from} onInput={handleSetFrom} />
      <ColorConfig id="to" color={to} onInput={handleSetTo} />
      <AmountConfig
        id="amount"
        label="粒子数"
        amount={amount}
        min={100}
        max={10000}
        step={100}
        onInput={handleSetAmount}
      />
      <AmountConfig
        id="size"
        label="粒子サイズ"
        amount={size}
        min={0.1}
        max={10}
        step={0.1}
        onInput={handleSetSize}
      />
      <PeriodConfig period={period} onInput={handleSetPeriod} />
      <SvgConfig type="curve" />
    </div>
  );
};

export default ModelConfig;
