import { ComponentProps } from "react";

const IconBtn = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={"active:bg-grey-100 rounded-sm p-1 " + className}
      {...props}
    />
  );
};

export default IconBtn;
