import { ComponentProps, useMemo } from "react";
import LoadingLightIcon from "@/common/icons/LoadingLightIcon";
import LoadingDarkIcon from "@/common/icons/LoadingDarkIcon";

interface Props extends ComponentProps<"button"> {
  color?: ButtonColors;
  variant?: ButtonVariants;
  isLoading?: boolean;
}

const getClasses = (
  color: ButtonColors,
  variant: ButtonVariants,
  isLoading: boolean,
  disabled: boolean,
) => {
  const baseClasses =
    "flex items-center justify-center cursor-pointer h-12 px-6 font-medium text-base gap-2.5 ";
  if (isLoading) {
    switch (variant) {
      case "contained":
        return baseClasses + "bg-grey-700 text-grey-300";
      case "outlined":
        return baseClasses + "bg-white border border-grey-600 text-grey-600";
    }
  }

  if (disabled) {
    switch (variant) {
      case "contained":
        return baseClasses + "bg-grey-100 text-grey-650";
      case "outlined":
        return baseClasses + "border bg-white bg-grey-600 text-grey-600";
    }
  }

  switch (variant) {
    case "contained":
      switch (color) {
        case "primary":
          return baseClasses + "bg-black text-white";
        case "yellow":
          return baseClasses + "bg-yellow-main text-black";
      }
    case "outlined":
      switch (color) {
        case "primary":
          return baseClasses + "bg-white border border-black text-black";
        case "yellow":
          return (
            baseClasses + "bg-white border border-yellow-main text-yellow-main"
          );
      }
  }
};

const Button = ({
  color = "primary",
  variant = "contained",
  isLoading = false,
  disabled = false,
  type = "button",
  className,
  children,
  ...props
}: Props) => {
  const classes = useMemo(
    () => getClasses(color, variant, isLoading, disabled),
    [color, variant, isLoading, disabled],
  );
  return (
    <button
      className={classes + " " + className}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? (
        <>
          {variant === "contained" ? (
            <LoadingLightIcon className={"animate-spin"} />
          ) : (
            <LoadingDarkIcon className={"animate-spin"} />
          )}
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
