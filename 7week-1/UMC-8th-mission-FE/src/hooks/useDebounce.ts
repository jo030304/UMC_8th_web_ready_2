import {useState, useEffect} from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  // value, delay가 변경될 때마다 실행
  useEffect(() => {
    // delay (ms) 후에 실행합니다.
    // delay 시간 후에 value를 debouncedValue로 업데이트하는 타이머를 시작합니다.
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    // value가 변경되면, 기존 타이머를 지워서 업데이트를 취소합니다.
    // 같이 계속 바꾸구ㄴ 때 마다 마지막에 딱한 번만 업데이트 됩니다
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;