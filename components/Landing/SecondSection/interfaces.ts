export interface BoxObj {
  imgSource: string;
  title: string;
  text: string;
}

export interface BlockProps {
  item: BoxObj;
  index: number;
  inView: boolean;
}
