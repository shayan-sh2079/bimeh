import { ComponentProps } from "react";

const RadioBtn = ({
  checked,
  className,
  ...props
}: ComponentProps<"input">) => {
  return (
    <label
      className={
        "border-grey-200 h-4 w-4 rounded-full border-2 " +
        (checked ? " bg-black" : " bg-white") +
        " " +
        className
      }
    >
      <input
        className={"opacity-0"}
        type={"radio"}
        checked={checked}
        {...props}
      />
    </label>
  );
};

export default RadioBtn;
