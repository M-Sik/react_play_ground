import { useContext } from "react";
import {
  ModalComponent,
  ModalProps,
  ModalsDispatchContext,
} from "../contexts/ModalContext";

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component: ModalComponent, props: ModalProps) => {
    open(Component, props);
  };

  const closeModal = (Component: ModalComponent) => {
    close(Component);
  };

  return { openModal, closeModal };
}
