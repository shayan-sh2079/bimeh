import ModalWrapper from "@/common/ui/ModalWrapper";
import { useMemo } from "react";
import Button from "@/common/ui/Button";

interface Props {
  isLoading: boolean;
  onClose: () => void;
}

const TryAgainModal = (props: Props) => {
  const modalAction = useMemo(
    () => (
      <div className={"grid grid-cols-2 gap-2.5"}>
        <Button
          className={"col-span-1"}
          type={"submit"}
          isLoading={props.isLoading}
        >
          تلاش مجدد
        </Button>
        <Button
          className={"col-span-1"}
          onClick={props.onClose}
          variant={"outlined"}
          disabled={props.isLoading}
        >
          بازگشت
        </Button>
      </div>
    ),
    [props.isLoading, props.onClose],
  );

  return (
    <ModalWrapper actions={modalAction} onClose={props.onClose}>
      <div className={"flex flex-col gap-2.5 px-3"}>
        <p className={"text-sm font-medium"}>
          متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.
        </p>
        <p className={"text-sm font-medium"}>مجددا، تلاش کنید.</p>
      </div>
    </ModalWrapper>
  );
};

export default TryAgainModal;
