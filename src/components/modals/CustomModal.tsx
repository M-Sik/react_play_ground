import ReactModal from "react-modal";
import { ModalProps } from "../../contexts/ModalContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  props: ModalProps;
};

export default function CustomModal({ isOpen, onClose, props }: Props) {
  const { title, content, confirmFunc } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal isOpen={isOpen} ariaHideApp={false}>
      <div>{title}</div>
      <div>{content}</div>
      <button onClick={handleClose}>닫기</button>
      <div>
        <button onClick={() => confirmFunc()}>확인</button>
      </div>
    </ReactModal>
  );
}
