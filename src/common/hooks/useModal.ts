import { useRouter, useSearchParams } from "next/navigation";
import { MODAL_NAME_KEY } from "@/common/constants/queryParams";

const useModal = (modalName: string) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  const onOpen = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(MODAL_NAME_KEY, modalName);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const isOpen = searchParams.get(MODAL_NAME_KEY) === modalName;

  return { onClose, onOpen, isOpen };
};

export default useModal;
