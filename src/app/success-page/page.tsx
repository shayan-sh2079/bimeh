import Header from "@/common/components/Header";
import CarPlate from "@/common/ui/CarPlate";
import InsuranceTextsPairs from "@/common/components/InsuranceTextsPairs";
import Image from "next/image";
import successImg from "@/common/assets/success.png";
import Button from "@/common/ui/Button";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className={"flex min-h-dvh flex-col pb-3"}>
      <Header text={"مشخصات بیمه نامه"} />
      <div className={"mt-6 mb-8 flex flex-col items-center gap-4 px-4"}>
        <Image src={successImg} alt={"success message"} />
        <p className={"text-base font-medium"}>
          ثبت اطلاعات شما، با <span className={"text-green-main"}>موفقیت</span>{" "}
          انجام شد.
        </p>
      </div>
      <div className={"flex flex-col gap-6 px-10"}>
        <CarPlate />
        <InsuranceTextsPairs />
      </div>
      <Link href={"/"} className={"mt-auto mr-auto ml-4.5"}>
        <Button className={"w-33"}>بازگشت</Button>
      </Link>
    </section>
  );
}
