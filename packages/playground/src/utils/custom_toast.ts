import { createToast, type ToastOptions } from "mosha-vue-toastify";

export enum ToastType {
  danger = "danger",
  default = "default",
  info = "info",
  success = "success",
  warning = "warning",
}

const colors = {
  danger: "#FF5252",
  default: "#313131",
  info: "#2196F3",
  success: "#1AA18F",
  warning: "#FFCC00",
};

export function createCustomToast(content: string, type: ToastType) {
  const toastOptions: ToastOptions = {
    hideProgressBar: true,
    position: "top-right",
    timeout: 5000,
    showIcon: true,
    type,
    toastBackgroundColor: colors[type],
  };

  createToast(content, toastOptions);
}