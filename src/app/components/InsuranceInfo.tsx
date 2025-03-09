import Header from "@/common/components/Header";
import CarPlate from "@/common/ui/CarPlate";
import InsuranceTextsPairs from "@/common/components/InsuranceTextsPairs";

const InsuranceInfo = () => {
  return (
    <section className={"flex flex-col"}>
      <Header text={"مشخصات بیمه نامه"} />
      <div className={"flex flex-col gap-6 px-10 pt-6"}>
        <CarPlate />
        <InsuranceTextsPairs />
      </div>
    </section>
  );
};

export default InsuranceInfo;
