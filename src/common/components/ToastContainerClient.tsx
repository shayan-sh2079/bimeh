"use client";

import dynamic from "next/dynamic";

const ToastContainerDynamic = dynamic(
  () => import("react-toastify").then((m) => m.ToastContainer),
  { ssr: false },
);

const ToastContainerClient = () => {
  return <ToastContainerDynamic limit={4} position={"top-center"} />;
};
export default ToastContainerClient;
