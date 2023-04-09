import React, {createContext} from "react";
import styled from "@emotion/styled";

const CardContext = createContext(null);

const Card = React.forwardRef((props, ref) => {

    const {children, cardRef} = props;

    return (
        <CardContext.Provider value={null}>
            <CardBox {...props} ref={ref}>
                {children}
            </CardBox>
        </CardContext.Provider>

    )
});

const CardHeader = () => {
    return (
        <div>title</div>
    )
}

const CardFooter = () => {
    return (
        <div>footer</div>
    )
}

Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;

const CardBox = styled.div`

  width: 600px;
  height: 700px;

  border: 5px solid #000000;
  border-radius: 25px;
  background-color: #ffffff;
`