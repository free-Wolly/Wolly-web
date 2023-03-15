import { StaticImageData } from "next/image";

export interface ParalaxProps {
  image: StaticImageData;
  baseVelocity: number;
  id: number;
  qty: number;
}
