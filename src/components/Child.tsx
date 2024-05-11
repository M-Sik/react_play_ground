import React from "react";

type Props = {
  testFunc: () => void;
  testState: string;
};

function Child({ testFunc, testState }: Props) {
  console.log("자식 리렌더링");
  return <div>Child {testState}</div>;
}

export default React.memo(Child);
