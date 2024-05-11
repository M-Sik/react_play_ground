import { useContext, useEffect } from "react";
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from "../../contexts/ModalContext";
import { createPortal } from "react-dom";
import { useLocation } from "react-router";

export default function Modals() {
  const pathName = useLocation().pathname;

  const opendModals = useContext(ModalsStateContext);
  const { close, allClose } = useContext(ModalsDispatchContext);

  // 페이지 이동시 열려있는 모든 모달을 닫기위한 로직
  useEffect(() => {
    console.log("화면 이동해서 모달 모두 닫음");
    allClose();
  }, [pathName]);

  return createPortal(
    <div>
      {opendModals.map((modalInfo, index) => {
        const { Component, props, isOpen } = modalInfo;
        const onClose = () => {
          close(Component);
        };
        return (
          <Component
            key={index}
            isOpen={isOpen}
            onClose={onClose}
            props={props}
          />
        );
      })}
    </div>,
    document.body
  );
}
