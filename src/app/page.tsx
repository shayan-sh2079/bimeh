import InsuranceInfo from "@/app/components/InsuranceInfo";
import UserInfo from "@/app/components/UserInfo";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col gap-8">
      <InsuranceInfo />
      <UserInfo />
    </div>
  );
}
