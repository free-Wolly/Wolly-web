export interface PlanProps {
  title: string;
  recommendation: string;
  price: string;
  included: string[];
  notIncluded?: string[];
  seeMore: boolean;
  setSeeMore: (value: boolean) => void;
}

export interface PlanInt {
  title: string;
  recommendation: string;
  price: string;
  included: string[];
  notIncluded?: string[];
}
