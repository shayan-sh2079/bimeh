import { MouseEvent, use, useState } from "react";
import { ADDRS_STORAGE_KEY } from "@/common/constants/storage";

const useAddrModal = (
  addrsPromise: Promise<Addr[]>,
  onDeleteOpen: (addr: Addr) => void,
) => {
  const addrs = (() => {
    const storedAddrs = sessionStorage.getItem(ADDRS_STORAGE_KEY);
    if (storedAddrs) return JSON.parse(storedAddrs);

    const addrs = use(addrsPromise);
    sessionStorage.setItem(ADDRS_STORAGE_KEY, JSON.stringify(addrs));
    return addrs;
  })();
  const [selectedAddr, setSelectedAddr] = useState<Addr | null>(null);

  const handleDeleteOpen = (e: MouseEvent<HTMLButtonElement>, idx: number) => {
    e.stopPropagation();
    e.preventDefault();
    onDeleteOpen(addrs[idx]);
  };

  return {
    handleDeleteOpen,
    addrs,
    selectedAddr,
    setSelectedAddr,
  };
};

export default useAddrModal;
