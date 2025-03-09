"use client";

import Input from "@/common/ui/Input";
import AddressInput from "@/app/components/AddressInput";
import Button from "@/common/ui/Button";
import TryAgainModal from "@/app/components/TryAgainModal";
import useUserForm from "@/app/hooks/useUserForm";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    isSubmitting,
    submitCount,
    onSubmit,
    onClose,
    isOpen,
  } = useUserForm();

  return (
    <form className={"flex grow flex-col"} onSubmit={handleSubmit(onSubmit)}>
      <p className={"mb-1.5 text-base/[170%] font-medium"}>
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </p>
      <Input
        placeholder={"کد ملی"}
        error={errors.nationalCode?.message}
        inputMode={"numeric"}
        {...register("nationalCode")}
      />
      <Input
        placeholder={"شماره تلفن همراه"}
        className={"mt-1"}
        error={errors.phone?.message}
        inputMode={"numeric"}
        {...register("phone")}
      />
      <AddressInput
        hasError={!!errors.addr?.message}
        onSelectAddress={(addr) => setValue("addr", addr)}
        selectedAddr={watch("addr")}
      />
      <div className={"mt-auto mr-auto"}>
        <Button
          disabled={!watch("nationalCode") || !watch("phone")}
          isLoading={isSubmitting}
          type={"submit"}
          className={"mt-6"}
        >
          تایید و ادامه
        </Button>
      </div>
      {isOpen && submitCount > 0 && (
        <TryAgainModal onClose={onClose} isLoading={isSubmitting} />
      )}
    </form>
  );
};

export default UserForm;
