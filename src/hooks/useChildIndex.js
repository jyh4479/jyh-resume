import React, {useEffect, useState} from "react";

export const useChildIndex = (parentRef, childRef) => {

    const [childIndex, setChildIndex] = useState(0);

    useEffect(() => {
        const childNodes = parentRef.current.childNodes;
        const index = Array.prototype.indexOf.call(childNodes, childRef.current);
        setChildIndex(index);
    }, [])

    return childIndex;
}