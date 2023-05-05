import {useEffect} from "react";

export const useTitleScrollEvent = (cardContainer, cardContainerTitle) => {
    useEffect(() => {

        const scrollHeight = cardContainer.current.offsetHeight;

        const scrollEvent = () => {

            const TOP_POSITION = 20;
            const BOTTOM_POSITION = 100;
            const REVERSE_TOP_POSITION = BOTTOM_POSITION - TOP_POSITION;

            const componentTopViewportPosition = parseInt(cardContainer.current.getBoundingClientRect().top);

            // Before scrolling
            if (componentTopViewportPosition > 0) {
                cardContainerTitle.current.style.position = "static";
                cardContainerTitle.current.style.marginTop = "11.5%";
                cardContainerTitle.current.style.left = "50%";
                cardContainerTitle.current.style.top = `${TOP_POSITION - 10}%`;
                cardContainerTitle.current.style.transform = "none";
                cardContainerTitle.current.style.zIndex = 9999;

                return;
            }

            // Scrolling
            if (-(scrollHeight - 1) < componentTopViewportPosition && componentTopViewportPosition <= 0) {

                cardContainerTitle.current.style.position = "fixed";

                //The move number by scroll event
                const move = componentTopViewportPosition / 25;

                //Current animation box top position
                const top = BOTTOM_POSITION + move;

                //Current target component index
                const targetIndex = (parseInt(-move / REVERSE_TOP_POSITION)) + 1;

                cardContainerTitle.current.style.marginTop = 0;
                cardContainerTitle.current.style.left = "50%";
                cardContainerTitle.current.style.top = `${TOP_POSITION - 10}%`;
                cardContainerTitle.current.style.transform = "translate(-50%)";
                cardContainerTitle.current.style.zIndex = 9999;
            }

            // After scrolling
            if (componentTopViewportPosition <= -(scrollHeight - 1)) {

                cardContainerTitle.current.style.position = "absolute";
                cardContainerTitle.current.style.top = "102%";
            }
        }

        window.addEventListener("wheel", scrollEvent, false);
        window.addEventListener("scroll", scrollEvent, false);

        return () => {
            window.removeEventListener("wheel", scrollEvent);
            window.removeEventListener("scroll", scrollEvent);

        }
    }, [])
}