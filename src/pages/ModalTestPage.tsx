import DefaultModal from "../components/modals/DefaultModal";
import CustomModal from "../components/modals/CustomModal";
import useModals from "../hooks/useModals";

const Child = () => {
  console.log("자식 컴포넌트 리렌더링");
  return <div>자식 컴포넌트</div>;
};

export default function ModalTestPage() {
  console.log("부모 리렌더링");

  const { openModal } = useModals();

  const handleOpenDefualtModal = () => {
    openModal(DefaultModal, { name: "zzzz" });
  };
  const handleOpenCustomModal = () => {
    openModal(CustomModal, {
      title: "커스텀 모달 열기에유",
      content: "커스텀 모달 열기 본문이에유",
      confirmFunc: () => console.log("확인시 실행되는 함수여유"),
    });
  };

  return (
    <div className="p-6">
      <h1>context api로 모달 만들기</h1>
      <button className="bg-blue-200 flex" onClick={handleOpenDefualtModal}>
        디폴트 모달 열기
      </button>
      <button className="bg-blue-200 flex" onClick={handleOpenCustomModal}>
        커스텀 모달 열기
      </button>
      <div>
        feafafewafafewafewfawef <br />
        feafae <br />
        feafae
        <br />
        feafae
        <br />
        feafae
        <br />
        feafae
        <br />
        feafae
        <br />
        feafae
      </div>
      <Child />
    </div>
  );
}
