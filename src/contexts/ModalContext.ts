import { ComponentType, createContext } from "react";

export type ModalComponent = ComponentType<any>;
export type ModalProps = Record<string, any>;
export type ModalsState = {
  Component: ModalComponent;
  props: ModalProps;
  isOpen: boolean;
};
type ModalsDispatch = {
  open: (Component: ModalComponent, props: ModalProps) => void;
  close: (Component: ModalComponent) => void;
  allClose: () => void;
};

export const ModalsStateContext = createContext<ModalsState[]>([]);

export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
  allClose: () => {},
});
