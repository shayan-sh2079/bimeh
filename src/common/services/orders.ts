import baseAxios from "@/common/services/baseAxios";
import { AxiosError } from "axios";

interface OrderRegistrationReq {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

interface ErrorsRes {
  errors: string[];
}

export const orderRegistration = async (
  data: OrderRegistrationReq,
): Promise<null | string> => {
  try {
    await baseAxios.post<string, ErrorsRes>("/order/completion/", data);
    return null;
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data.errors?.[0] || e.message;
    }
    return "Something went wrong";
  }
};
