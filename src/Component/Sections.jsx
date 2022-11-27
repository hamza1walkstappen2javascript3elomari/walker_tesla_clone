import React from "react";
import styling from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  title,
  backgroundImg,
  description,
  LeftBtnText,
  rightBtnText
}) {
  return (
    <Container bagh={backgroundImg}>
      <Wrap>
        <ItemText>
          <Fade bottom>
            <h1>{title}</h1>
            <p>{description}</p>
          </Fade>
        </ItemText>
        <ButtonGroup>
          <LeftButton>
            <Fade bottom>{LeftBtnText}</Fade>
          </LeftButton>
          <RightButton>
            <Fade bottom>{rightBtnText}</Fade>
          </RightButton>
        </ButtonGroup>
        <DownArrow src="/imgs/down-arrow.svg" />
      </Wrap>
    </Container>
  );
}
export default Section;
const Container = styling.div`
width:100%;
background-size:cover;
background-repeat:non-repeat;
background-position:center;
height:100vh;
display:felx;
align-items:center;
// background-color:red;
background-image:${(props) => `url("/imgs/${props.bagh}")`};
z-index=1;
`;
const Wrap = styling.div`
width:100%;
height 100%;
display:flex;
flex-wrap: wrap;
flex-direction: column;
justify-content:space-evenly;
align-items: center;


`;
const ItemText = styling.div`
text-align:center;
height:60%;
width:100%;
padding-top:10%;
// background:green;
`;
const ButtonGroup = styling.div`
width:100%;
height:15%;
display:flex;
flex-direction: column;
justify-content:space-between;
align-items:center;
text-transform:upper-case;
// background:red;

`;
const LeftButton = styling.div`
height:40%;
width:60%;
border-radius:100px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(23,26,32,0.8);
text-transform: uppercase;
color:white
`;
const RightButton = styling.div`
height:40%;
width:60%;
border-radius:100px;
display:flex;
justify-content:center;
align-items:center;
background-color:white;
opacity:0.5;
text-transform: uppercase;
color:black;
`;
const DownArrow = styling.img`
height:5%;
width:50%;
transform:rotate(89%);
animation:ArrowAnimation infinite 1.5s;
`;
