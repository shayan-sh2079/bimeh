import Header from "@/common/components/Header";
import UserForm from "@/app/components/UserForm";

const UserInfo = () => {
  return (
    <section className={"flex grow flex-col"}>
      <Header text={"مشخصات مالک خودرو"} />
      <div className={"flex grow flex-col px-[19px] py-6"}>
        <UserForm />
      </div>
    </section>
  );
};

export default UserInfo;
