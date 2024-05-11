import React from "react";

type Props = {
  testFunc: () => void;
  testState: string;
};

function Child({ testFunc, testState }: Props) {
  // console.log("자식 리렌더링");
  return <button onClick={testFunc}>Child {testState}</button>;
}

export default React.memo(Child);
