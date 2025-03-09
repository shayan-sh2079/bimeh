"use client";

import Button from "@/common/ui/Button";
import useModal from "@/common/hooks/useModal";
import {
  CHOOSE_ADDR_MODAL,
  DELETE_ADDR_MODAL,
} from "@/common/constants/modals";
import dynamic from "next/dynamic";
import ModalLoading from "@/common/ui/ModalLoading";
import { useState } from "react";
import { ADDRS_STORAGE_KEY } from "@/common/constants/storage";

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
  const { onOpen, isOpen: isChooseOpen, onClose } = useModal(CHOOSE_ADDR_MODAL);
  const {
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
    isOpen: isDeleteOpen,
  } = useModal(DELETE_ADDR_MODAL);
  const [addrToDelete, setAddrToDelete] = useState<Addr | null>();

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
              onClick={onOpen}
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
            onClose();
            props.onSelectAddress(addr);
          }}
          onClose={onClose}
          onDeleteOpen={(addr) => {
            setAddrToDelete(addr);
            onDeleteOpen();
          }}
        />
      )}
      {isDeleteOpen && addrToDelete && (
        <DeleteAddrModelDynamic
          onConfirm={() => {
            const storedAddresses: Addr[] = JSON.parse(
              sessionStorage.getItem(ADDRS_STORAGE_KEY)!,
            );
            const newAddresses = storedAddresses.filter(
              (addr) => addr.id !== addrToDelete?.id,
            );
            sessionStorage.setItem(
              ADDRS_STORAGE_KEY,
              JSON.stringify(newAddresses),
            );
            onDeleteClose();
          }}
          onClose={onDeleteClose}
          addr={addrToDelete!}
        />
      )}
    </>
  );
};

export default AddressInput;
