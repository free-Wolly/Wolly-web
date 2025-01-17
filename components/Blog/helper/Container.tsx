import { classNames } from "../../../utils/classNames";

export default function Container(props: any) {
  return (
    <div
      className={classNames(
        "container px-8 mx-auto xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt ? "py-5 lg:py-8" : "",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
