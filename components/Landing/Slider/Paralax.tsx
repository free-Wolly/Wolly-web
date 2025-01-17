import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  MotionValue,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { ParalaxProps } from "./interfaces";

const Parallax = ({ image, baseVelocity, id, qty }: ParalaxProps) => {
  const baseX = useMotionValue<number>(0);
  const { scrollY }: { scrollY: MotionValue<number> } = useScroll();
  const scrollVelocity: MotionValue<number> = useVelocity(scrollY);
  const smoothVelocity: MotionValue<any> = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor: MotionValue<number> = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    }
  );

  const x: MotionValue<string> = useTransform(
    baseX,
    (v) => `${wrap((-1 - id) * 100 + 50, (qty - 1) * 100 - id * 100 + 50, v)}%`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t: number, delta: number) => {
    let moveBy: number =
      directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      className="p-4 md:p-6 lg:p-10 min-w-[15rem] md:min-w-[25rem] lg:min-w-[35rem] min-h-[11rem] md:min-h-[18rem] lg:min-h-[25rem]"
      style={{ x }}
    >
      <Image
        loading="lazy"
        placeholder="blur"
        className="w-full h-full rounded-2xl"
        src={image}
        alt=""
      ></Image>
    </motion.div>
  );
};

export default Parallax;
