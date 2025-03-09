"use client";

import { useMemo } from "react";
import ModalWrapper from "@/common/ui/ModalWrapper";
import Button from "@/common/ui/Button";
import { getAddresses } from "@/common/services/address";
import RadioBtn from "@/common/ui/RadioBtn";
import IconBtn from "@/common/ui/IconBtn";
import CloseIcon from "@/common/icons/CloseIcon";
import useAddrModal from "@/app/hooks/useAddrsModal";

interface Props {
  onSelect: (addr: Addr) => void;
  onClose: () => void;
  onDeleteOpen: (addr: Addr) => void;
}

const addrsPromise = getAddresses();

const AddrsModal = (props: Props) => {
  const { handleDeleteOpen, addrs, selectedAddr, setSelectedAddr } =
    useAddrModal(addrsPromise, props.onDeleteOpen);

  const modalAction = useMemo(
    () => (
      <Button
        className={"w-full"}
        disabled={!selectedAddr}
        onClick={() => props.onSelect(selectedAddr!)}
      >
        انتخاب
      </Button>
    ),
    [selectedAddr],
  );

  return (
    <ModalWrapper
      actions={modalAction}
      title={"انتخاب آدرس"}
      onClose={props.onClose}
    >
      <ul className={"flex flex-col gap-4 px-3 py-2"}>
        {addrs.map((addr, idx) => (
          <li
            key={addr.id}
            className={"flex flex-col gap-2"}
            onClick={() => setSelectedAddr(addr)}
          >
            <div className={"flex items-center gap-1.5"}>
              <RadioBtn readOnly checked={selectedAddr?.id === addr.id} />
              <p className={"ml-auto text-sm font-medium"}>{addr.name}</p>
              <IconBtn
                type={"button"}
                onClick={(e) => handleDeleteOpen(e, idx)}
              >
                <CloseIcon className={"h-2.5 w-2.5 text-red-300"} />
              </IconBtn>
            </div>
            <p className={"text-grey-500 px-6 text-xs"}>{addr.details}</p>
          </li>
        ))}
      </ul>
    </ModalWrapper>
  );
};

export default AddrsModal;
