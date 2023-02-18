import React from 'react';
import {Text} from "../style"

const NormalText = (props) => {

    const {children, size} = props;

    return <Text size={size}>{children}</Text>;
}

export default NormalText;