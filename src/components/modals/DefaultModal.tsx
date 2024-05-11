import ReactModal from "react-modal";
import useModals from "../../hooks/useModals";
import CustomModal from "./CustomModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DefaultModal({ isOpen, onClose }: Props) {
  const { openModal } = useModals();
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <div>Default modal</div>
      <button onClick={() => openModal(CustomModal, { name: "world" })}>
        커스텀 모달 열기
      </button>
      <div>
        <button onClick={handleClose}>닫기</button>
      </div>
    </ReactModal>
  );
}
