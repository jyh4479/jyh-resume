import React from 'react';
import {Text} from "../style"

const NormalText = (props) => {

    const {children, size, color = "#000000"} = props;

    return <Text {...props}>{children}</Text>;
}

export default NormalText;