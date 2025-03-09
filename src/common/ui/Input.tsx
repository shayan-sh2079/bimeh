import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  error?: string;
}

const Input = ({ error, className, ...props }: Props) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <input
        className={
          "border-input-border h-12 border px-3 text-sm outline-none" +
          (error
            ? " border-red-main text-red-main"
            : " text-grey-500 font-medium") +
          " " +
          className
        }
        {...props}
      />
      <p className={"text-red-main text-sm" + (error ? "" : " invisible")}>
        {error || "no error"}
      </p>
    </div>
  );
};

export default Input;
