"use client";

import Button from "@/common/ui/Button";
import dynamic from "next/dynamic";
import ModalLoading from "@/common/ui/ModalLoading";
import useAddressInput from "@/app/hooks/useAddressInput";

const AddrsModalDynamic = dynamic(() => import("@/app/components/AddrsModal"), {
  loading: ModalLoading,
  ssr: false,
});

const DeleteAddrModelDynamic = dynamic(
  () => import("@/app/components/DeleteAddrModel"),
  { ssr: false, loading: ModalLoading },
);

interface Props {
  hasError: boolean;
  onSelectAddress: (addr: Addr) => void;
  selectedAddr: Addr | null;
}

const AddressInput = (props: Props) => {
  const {
    onChooseOpen,
    isChooseOpen,
    onChooseClose,
    onDeleteClose,
    isDeleteOpen,
    addrToDelete,
    onConfirmDelete,
    onDelete,
  } = useAddressInput();

  return (
    <>
      <div className={"mt-4 flex flex-col gap-1.5"}>
        <p className={"text-base font-medium"}>آدرس جهت درج روی بیمه نامه</p>
        {props.selectedAddr ? (
          <p className={"text-grey-500 mt-4 text-xs"}>
            {props.selectedAddr.details}
          </p>
        ) : (
          <>
            <p
              className={
                "text-sm " + (props.hasError ? "text-red-main" : "text-black")
              }
            >
              لطفا آدرسی را که می خواهید روی بیمه نامه درج شود، وارد کنید.
            </p>
            <Button
              color={"yellow"}
              className={"w-full"}
              onClick={onChooseOpen}
              type={"button"}
            >
              انتخاب از آدرس های من
            </Button>
          </>
        )}
      </div>
      {isChooseOpen && (
        <AddrsModalDynamic
          onSelect={(addr) => {
            onChooseClose();
            props.onSelectAddress(addr);
          }}
          onClose={onChooseClose}
          onDeleteOpen={onDelete}
        />
      )}
      {isDeleteOpen && addrToDelete && (
        <DeleteAddrModelDynamic
          onConfirm={onConfirmDelete}
          onClose={onDeleteClose}
          addr={addrToDelete!}
        />
      )}
    </>
  );
};

export default AddressInput;
