import { NATIONAL_CODE_RGX } from "@/common/constants/validations";
import { persianToEnglishNum } from "@/common/utils/general";

export const validateNationalCode = (nationalCode: string) => {
  if (!NATIONAL_CODE_RGX.test(nationalCode)) return false;

  const nationalNum = persianToEnglishNum(nationalCode);
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(nationalNum[i]) * (10 - i);
  }
  const remainder = sum % 11;
  let checkDigit;

  if (remainder < 2) {
    checkDigit = remainder;
  } else {
    checkDigit = 11 - remainder;
  }

  return checkDigit === parseInt(nationalNum[9]);
};
