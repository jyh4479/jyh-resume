import {useEffect} from "react";

//TODO: title scroll event와 겹치는 로직이 많음 공통화 할 수 있는 부분 찾기
export const useCardScrollEvent = (cardContainer, cardBoxRefs) => {
    useEffect(() => {

        const scrollHeight = cardContainer.current.offsetHeight;

        const componentScrollEvent = (e) => {
            // Scroll 동작이 window가 아니라 특정 component에 붙어있기 때문에 class name으로 scroll 붙어있는 component에 접근
            document.querySelector(".main-page").scrollBy(0, e.deltaY);
        }

        const scrollEvent = () => {

            const TOP_POSITION = 20;
            const BOTTOM_POSITION = 100;
            const REVERSE_TOP_POSITION = BOTTOM_POSITION - TOP_POSITION;

            const componentTopViewportPosition = parseInt(cardContainer.current.getBoundingClientRect().top);

            // Before scrolling
            if (componentTopViewportPosition > 0) {
                cardBoxRefs.current.forEach((current, index) => {
                    if (index === 0) {
                        current.style.position = "static";
                        current.style.transform = "none";
                        current.style.marginTop = "7.5%";
                    } else {
                        current.style.position = "fixed";
                        current.style.top = "100%";
                    }
                });
                return;
            }

            // Scrolling
            if (-(scrollHeight - 1) < componentTopViewportPosition && componentTopViewportPosition <= 0) {

                cardBoxRefs.current.forEach(current => {
                    current.style.position = "fixed";
                });

                //The move number by scroll event
                const move = componentTopViewportPosition / 25;

                //Current animation box top position
                const top = BOTTOM_POSITION + move;

                //Current target component index
                const targetIndex = (parseInt(-move / REVERSE_TOP_POSITION)) + 1;

                //TODO: validation 함수화
                if (0 < targetIndex - 1 && targetIndex - 1 < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex - 1].style.top = `${TOP_POSITION}%`;
                if (0 < targetIndex + 1 && targetIndex + 1 < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex + 1].style.top = "100%";
                if (0 < targetIndex && targetIndex < cardBoxRefs.current.length) cardBoxRefs.current[targetIndex].style.top = `${top + (REVERSE_TOP_POSITION * (targetIndex - 1))}%`;

                cardBoxRefs.current[0].style.position = "fixed";
                cardBoxRefs.current[0].style.marginTop = 0;
                cardBoxRefs.current[0].style.left = "50%";
                cardBoxRefs.current[0].style.top = `${TOP_POSITION}%`;
                cardBoxRefs.current[0].style.transform = "translate(-50%)";
            }

            // After scrolling
            if (componentTopViewportPosition <= -(scrollHeight - 1)) {
                cardBoxRefs.current.forEach((current, index) => {
                    current.style.position = "absolute";
                    current.style.top = "104%";
                    // current.style.left = "50%";
                    // current.style.transform = "translate(-50%)";
                })
            }
        }

        window.addEventListener("wheel", scrollEvent, false);
        window.addEventListener("scroll", scrollEvent, false);


        return () => {
            window.removeEventListener("wheel", scrollEvent);
            window.removeEventListener("scroll", scrollEvent);
        }
    }, [cardBoxRefs.current])
}