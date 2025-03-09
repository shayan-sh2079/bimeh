import Header from "@/common/components/Header";
import UserForm from "@/app/components/UserForm";
import { Suspense } from "react";

const UserInfo = () => {
  return (
    <section className={"flex grow flex-col"}>
      <Header text={"مشخصات مالک خودرو"} />
      <div className={"flex grow flex-col px-[19px] py-6"}>
        <Suspense>
          <UserForm />
        </Suspense>
      </div>
    </section>
  );
};

export default UserInfo;
