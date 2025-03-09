"use client";
import IconBtn from "@/common/ui/IconBtn";
import CloseIcon from "@/common/icons/CloseIcon";

interface Props {
  title?: string;
  children: React.ReactNode;
  actions: React.ReactNode;
  onClose: () => void;
}

const ModalWrapper = (props: Props) => {
  const hasHeader = !!props.title;

  return (
    <div role={"presentation"} className={"z-30"}>
      <div className={"fixed inset-0 bg-black/70"} onClick={props.onClose} />
      <div className={"fixed bottom-0 left-0 flex w-screen flex-col bg-white"}>
        {hasHeader && (
          <div
            className={
              "border-grey-border flex h-14 items-center justify-between border-b px-3"
            }
          >
            <p className={"text-base font-medium"}>{props.title}</p>
            <IconBtn onClick={props.onClose} type={"button"}>
              <CloseIcon className={"text-grey-200"} />
            </IconBtn>
          </div>
        )}
        <div className={"max-h-54 overflow-auto py-2"}>{props.children}</div>
        <div className={"p-2.5 shadow-sm"}>{props.actions}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
