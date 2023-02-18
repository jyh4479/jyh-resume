import React from 'react';
import {Text} from "../style"

const BounceText = (props) => {

    const {children} = props;

    return <Text {...props}>{children}</Text>;
}

export default BounceText;