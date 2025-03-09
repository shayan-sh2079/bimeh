import { IconsProps } from "@/common/types/components";

const CloseIcon = (props: IconsProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="#C2C2C2"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9998 1.39976L12.5995 -0.000488281L6.99928 5.59976L1.39903 -0.000488281L-0.0012207 1.39976L5.59903 7.00001L-0.0012207 12.6003L1.39903 14.0005L6.99928 8.40026L12.5995 14.0005L13.9998 12.6003L8.39953 7.00001L13.9998 1.39976Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloseIcon;
