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

const CardHeader = (props) => {

    const {children} = props;

    return <HeaderStyle>{children}</HeaderStyle>
}

const CardBody = (props) => {

    const {children} = props;

    return <BodyStyle>{children}</BodyStyle>
}

const CardImage = (props) => {
    return <ImageStyle {...props}/>
}

const CardFooter = (props) => {

    const {children} = props;

    return <FooterStyle>{children}</FooterStyle>
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card;

const CardBox = styled.div`

  width: 600px;
  height: 700px;

  border: 5px solid #000000;
  border-radius: 25px;
  background-color: #ffffff;
`

const HeaderStyle = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const BodyStyle = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FooterStyle = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageStyle = styled.img`
  max-width: ${props => props.width ? props.width : 300}px;
  height: auto;
  margin: 5px;
`