import useModal from "@/common/hooks/useModal";
import {
  CHOOSE_ADDR_MODAL,
  DELETE_ADDR_MODAL,
} from "@/common/constants/modals";
import { useState } from "react";
import { ADDRS_STORAGE_KEY } from "@/common/constants/storage";

const useAddressInput = () => {
  const {
    onOpen: onChooseOpen,
    isOpen: isChooseOpen,
    onClose: onChooseClose,
  } = useModal(CHOOSE_ADDR_MODAL);
  const {
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
    isOpen: isDeleteOpen,
  } = useModal(DELETE_ADDR_MODAL);
  const [addrToDelete, setAddrToDelete] = useState<Addr | null>();

  const onConfirmDelete = () => {
    const storedAddresses: Addr[] = JSON.parse(
      sessionStorage.getItem(ADDRS_STORAGE_KEY)!,
    );
    const newAddresses = storedAddresses.filter(
      (addr) => addr.id !== addrToDelete?.id,
    );
    sessionStorage.setItem(ADDRS_STORAGE_KEY, JSON.stringify(newAddresses));
    onDeleteClose();
  };

  const onDelete = (addr: Addr) => {
    setAddrToDelete(addr);
    onDeleteOpen();
  };

  return {
    onChooseOpen,
    isChooseOpen,
    onChooseClose,
    onDeleteOpen,
    onDeleteClose,
    isDeleteOpen,
    addrToDelete,
    setAddrToDelete,
    onConfirmDelete,
    onDelete,
  };
};

export default useAddressInput;
