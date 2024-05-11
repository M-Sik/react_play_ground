import { useCallback, useState } from "react";
import Child from "../components/Child";

export default function MainPage() {
  console.log("부모 리렌더링");
  const [count, setCount] = useState(0);

  const func = () => "devsik";
  const testFunc = useCallback(() => console.log("테스트 함 수실행"), []);

  return (
    <div>
      <div>부모 컴포넌트</div>
      <button onClick={() => setCount(count + 1)}>추가</button>
      <Child testFunc={testFunc} testState={func()} />
    </div>
  );
}
