import useModal from "@/common/hooks/useModal";
import { TRY_AGAIN_MODAL } from "@/common/constants/modals";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { persianToEnglishNum } from "@/common/utils/general";
import { orderRegistration } from "@/common/services/orders";
import { toast } from "react-toastify";
import { USER_DATA_STORAGE_KEY } from "@/common/constants/storage";
import { useEffect } from "react";
import { PHONE_RGX } from "@/common/constants/validations";
import { validateNationalCode } from "@/common/utils/validations";
import { z } from "zod";

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

const useUserForm = () => {
  const { isOpen, onClose, onOpen } = useModal(TRY_AGAIN_MODAL);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const reqData = {
      nationalId: persianToEnglishNum(data.nationalCode),
      phoneNumber: persianToEnglishNum(data.phone),
      addressId: data.addr.id,
    };
    const errorMsg = await orderRegistration(reqData);
    if (errorMsg) {
      toast.error(errorMsg);
      if (!isOpen) onOpen();
    } else {
      sessionStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(data));
      router.push("/success-page");
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem(USER_DATA_STORAGE_KEY);
    if (storedData) {
      reset(JSON.parse(storedData));
    }
  }, []);

  return {
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
  };
};

export default useUserForm;
