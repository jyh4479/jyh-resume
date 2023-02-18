import {useEffect, useRef} from 'react';
import {constSelector} from "recoil";

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

/*

https://mingule.tistory.com/65

delay를 100에서 null로 변경하면 setInterval 함수가 중지됩니다. 이때 useEffect 훅에서 반환된 clean-up 함수가 호출되어야 하지만,
clean-up 함수가 호출되지 않는 이유는 다음과 같습니다.

useEffect 훅은 첫 번째 인자로 전달된 함수가 실행될 때 반환된 clean-up 함수를 기억합니다.
그리고 이전의 useEffect 훅이 재실행될 때 이전에 반환된 clean-up 함수를 호출하여 이전의 작업을 중지시키고 새로운 작업을 시작합니다.
따라서, delay가 100에서 null로 변경되었을 때, 이전의 useEffect 훅에서 반환된 clean-up 함수는 이전의 setInterval 작업을 중지시키기 위해 호출됩니다.

그리고 이후 useEffect 훅에서는 새로운 setInterval 작업을 시작하게 됩니다.
이때 반환된 clean-up 함수는 이 새로운 setInterval 작업을 중지시키기 위해 호출됩니다.
그리고 delay가 다시 null로 변경될 때도 clean-up 함수가 호출되어야 하는데, 이전에 반환된 clean-up 함수는 이미 이전의 작업을 중지시키기 위해 호출되었기 때문에 새로운 clean-up 함수가 반환되어야 합니다.

따라서, delay 값을 변경하면서 setInterval 작업을 중지하고 새로운 작업을 시작하는 경우, 이전의 clean-up 함수가 호출되고 새로운 clean-up 함수가 반환됩니다.
그리고 delay 값이 null인 경우 clean-up 함수가 반환되지만, setInterval 작업이 실행되지 않으므로 clean-up 함수는 호출되지 않습니다.

///////////////

++ StrictMode에서 useEffect에 빈배열([])을 인자로 전달해도 추가적인 검사로인해 두번 실행되는것처럼 볼 수 있다.
(그렇다고 실제로 렌더링이 두번되는것은 아니다.)

 */