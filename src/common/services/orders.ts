import baseAxios from "@/common/services/baseAxios";

interface OrderRegistrationReq {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export const orderRegistration = async (data: OrderRegistrationReq) => {
  //todo
  const res = await baseAxios.post<Addr[]>("/order/completion/", data);
  console.log(res);
};
