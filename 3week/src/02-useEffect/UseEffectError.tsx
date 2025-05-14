import { useEffect, useState } from 'react';

export default function UseEffectError() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  useEffect(() => {
    // 1. 초기 렌더링 시작 (counter++)
    setCounter(prevCounter => prevCounter + 1);

    // 2. counter 값이 변경될 때마다 실행
  }, [counter]); // 의존성 배열에 counter를 추가해서 업데이트를 트리거

  return <div onClick={handleIncrease}>{counter}</div>;
}
