import baseAxios from "@/common/services/baseAxios";

export const getAddresses = async () => {
  const res = await baseAxios.get<Addr[]>("/my-addresses/");
  return res.data;
};
