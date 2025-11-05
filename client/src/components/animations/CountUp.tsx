import { useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

interface CountUpProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({ value, duration = 2, className = "", suffix = "" }: CountUpProps) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [value, duration, count]);

  return (
    <span className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
