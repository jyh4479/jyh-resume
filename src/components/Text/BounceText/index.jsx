import React from 'react';
import {Text} from "../style"

const BounceText = (props) => {

    const {children} = props;

    return <Text>{children}</Text>;
}

export default BounceText;