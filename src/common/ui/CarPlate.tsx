import iranFlag from "@/common/assets/iran-flag.png";
import Image from "next/image";

const CarPlateText = ({ text }: { text: string }) => {
  return <p className={"text-lg font-semibold"}>{text}</p>;
};

const CarPlate = () => {
  return (
    <div
      className={
        "flex h-[50px] w-full overflow-hidden rounded-md border-2 border-black"
      }
    >
      <div className={"flex w-[53px] items-center justify-center"}>
        <CarPlateText text={"60"} />
      </div>
      <div
        className={
          "flex grow items-center justify-center gap-2.5 border-x-2 border-black"
        }
      >
        <CarPlateText text={"988"} />
        <CarPlateText text={"ک"} />
        <CarPlateText text={"64"} />
      </div>
      <div className={"bg-blue-main relative w-[46px]"}>
        <Image
          src={iranFlag}
          alt={"iran flag"}
          className={"absolute top-[6px] left-[8px]"}
        />
        <p
          className={
            "absolute right-[7px] bottom-[6px] text-xs font-black text-white"
          }
          dir={"ltr"}
        >
          I.R.
        </p>
      </div>
    </div>
  );
};

export default CarPlate;
