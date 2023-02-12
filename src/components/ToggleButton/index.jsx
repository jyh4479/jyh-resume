import React, {useState} from 'react';

const ToggleButton = (props) => {

    const {onClick = isTrue => null} = props;

    const [isTrue, setIsTrue] = useState(false);

    const check = (e) => {
        setIsTrue(e.target.checked);
        onClick(e.target.checked);
    }

    return (
        <input type="checkbox" onClick={check}/>
    )
}

export default ToggleButton;