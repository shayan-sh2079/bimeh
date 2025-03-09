import CarIcon from "@/common/icons/CarIcon";

interface Props {
  text: string;
}

const Header = (props: Props) => {
  return (
    <header className={"flex h-14 items-center gap-1.5 px-2 shadow-md"}>
      <div
        className={
          "bg-yellow-main flex h-8 w-8 items-center justify-center rounded-md"
        }
      >
        <CarIcon />
      </div>
      <h2 className={"text-lg font-medium"}>{props.text}</h2>
    </header>
  );
};

export default Header;
