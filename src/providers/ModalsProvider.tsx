import { Component, useMemo, useState } from "react";
import {
  ModalComponent,
  ModalProps,
  ModalsDispatchContext,
  ModalsState,
  ModalsStateContext,
} from "../contexts/ModalContext";
import Modals from "../components/modals/Modals";

type Props = {
  children: JSX.Element;
};

export default function ModalsProvider({ children }: Props) {
  const [opendModals, setOpendModals] = useState<ModalsState[]>([]);

  const open = (Component: ModalComponent, props: ModalProps) => {
    setOpendModals((prevModal) => {
      return [
        ...prevModal,
        {
          Component,
          props,
          isOpen: true,
        },
      ];
    });
  };

  const close = (Component: ModalComponent) => {
    setOpendModals((prevModals) => {
      return prevModals.filter((item) => item.Component !== Component);
    });
  };

  const allClose = () => {
    setOpendModals((prevModals) =>
      prevModals.map((modal) => ({ ...modal, isOpen: false }))
    );
  };

  const dispatch = useMemo(() => ({ open, close, allClose }), []);

  return (
    <ModalsStateContext.Provider value={opendModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        <Modals />
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
