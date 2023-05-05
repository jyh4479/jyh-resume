import {useEffect} from "react";

//TODO: window 이벤트가 아님 -> hook으로 구현할 필요없음
export const useBackGroundScrollEvent = (cardBoxRefs) => {
    useEffect(() => {
        const componentScrollEvent = (e) => {
            // Scroll 동작이 window가 아니라 특정 component에 붙어있기 때문에 class name으로 scroll 붙어있는 component에 접근
            document.querySelector(".main-page").scrollBy(0, e.deltaY);
        }

        cardBoxRefs.current.forEach(ref => {
            ref.addEventListener("wheel", componentScrollEvent);
            ref.addEventListener("scroll", componentScrollEvent);
        })

        return () => {
            cardBoxRefs.current.forEach(ref => {
                ref.removeEventListener("wheel", componentScrollEvent);
                ref.removeEventListener("scroll", componentScrollEvent);
            })
        }
    }, [])
}