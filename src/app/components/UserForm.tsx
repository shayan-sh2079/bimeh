"use client";

import Input from "@/common/ui/Input";
import AddressInput from "@/app/components/AddressInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/common/ui/Button";
import { PHONE_RGX } from "@/common/constants/validations";
import { validateNationalCode } from "@/common/utils/validations";
import { orderRegistration } from "@/common/services/orders";
import { persianToEnglishNum } from "@/common/utils/general";
import { USER_DATA_STORAGE_KEY } from "@/common/constants/storage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Inputs {
  nationalCode: string;
  phone: string;
  addr: Addr;
}

const schema = z.object({
  nationalCode: z
    .string()
    .refine(validateNationalCode, { message: "کدملی وارد شده معتبر نیست." }),
  phone: z
    .string()
    .regex(PHONE_RGX, { message: "شماره تلفن همراه معتبر نیست." }),
  addr: z.object({
    id: z.string(),
    name: z.string(),
    details: z.string(),
  }),
});

const UserForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const reqData = {
      nationalId: persianToEnglishNum(data.nationalCode),
      phoneNumber: persianToEnglishNum(data.phone),
      addressId: data.addr.id,
    };
    localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(data));
    router.push("/success-page");
    // await orderRegistration(reqData);
  };

  useEffect(() => {
    const storedData = localStorage.getItem(USER_DATA_STORAGE_KEY);
    if (storedData) {
      reset(JSON.parse(storedData));
    }
  }, []);

  return (
    <form className={"flex grow flex-col"} onSubmit={handleSubmit(onSubmit)}>
      <p className={"mb-1.5 text-base/[170%] font-medium"}>
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </p>
      <Input
        placeholder={"کد ملی"}
        error={errors.nationalCode?.message}
        {...register("nationalCode")}
      />
      <Input
        placeholder={"شماره تلفن همراه"}
        className={"mt-1"}
        error={errors.phone?.message}
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
          className={"mt-6 w-33"}
        >
          تایید و ادامه
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
