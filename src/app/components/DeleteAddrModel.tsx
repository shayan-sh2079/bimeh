import ModalWrapper from "@/common/ui/ModalWrapper";
import { useMemo } from "react";
import Button from "@/common/ui/Button";

interface Props {
  onConfirm: () => void;
  onClose: () => void;
  addr: Addr;
}

const DeleteAddrModel = (props: Props) => {
  const modalAction = useMemo(
    () => (
      <div className={"grid grid-cols-2 gap-2.5"}>
        <Button className={"col-span-1"} onClick={props.onConfirm}>
          تایید
        </Button>
        <Button
          className={"col-span-1"}
          onClick={props.onClose}
          variant={"outlined"}
        >
          بازگشت
        </Button>
      </div>
    ),
    [props.onConfirm, props.onClose],
  );

  return (
    <ModalWrapper
      actions={modalAction}
      title={"حذف آدرس"}
      onClose={props.onClose}
    >
      <div className={"flex flex-col gap-4 px-3 py-4"}>
        <p className={"text-sm font-medium"}>
          آیا از حذف آدرس خود، مطمین هستید؟
        </p>
        <div className={"bg-grey-800 flex flex-col gap-2 p-2"}>
          <p className={"text-sm font-medium"}>{props.addr.name}</p>
          <p className={"text-grey-500 text-xs"}>{props.addr.details}</p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteAddrModel;
