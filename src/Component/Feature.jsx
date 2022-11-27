import React from "react";
import Styling from "styled-components";
import Fade from "react-reveal/Fade";
function Feature() {
  console.log("hiy");
  return (
    <Container>
      <Wrap>
        <Fade bottom>
          <h1>All-New-Interior</h1>
        </Fade>
      </Wrap>
      <First>
        <img src="/imgs/game.jpg" />
        <Fade bottom>
          <p>
            <h2>Game from AnyWhere</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            suscipit, magni reprehenderit distinctio enim praesentium nisi,
            quibusdam iure sit, molestiae ipsam rerum architecto eligendi beatae
            repudiandae rem optio aut nam!
          </p>
        </Fade>
      </First>
      <Second>
        <img src="/imgs/connected.jpg" />
        <Fade bottom>
          <p>
            <h2>Stay Connected</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            suscipit, magni reprehenderit distinctio enim praesentium nisi,
            quibusdam iure sit, molestiae ipsam rerum architecto eligendi beatae
            repudiandae rem optio aut nam!
          </p>
        </Fade>
      </Second>
      <Third>
        <img src="/imgs/audio.jpg" />
        <Fade bottom>
          <p>
            <h2>Your Best Audio System</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            suscipit, magni reprehenderit distinctio enim praesentium nisi,
            quibusdam iure sit, molestiae ipsam rerum architecto eligendi beatae
            repudiandae rem optio aut nam!
          </p>
        </Fade>
      </Third>
    </Container>
  );
}
export default Feature;
const Container = Styling.div`
widht:100%;
// background:green
background:black;
background:black;
z-index=1;
`;
const Wrap = Styling.div`
width:100%;
height:100vh;
background-image:url("/imgs/new-interior.jpg");
background-size:cover;
background-repeat:non-repeat;
background-position:center;
h1{
  // color:red;
  width:40%;
  margin:auto;
  height:20%;
  text-align:center;
  padding-top:20px;
  color:white;
  font-weight:bolder
};
// background:green
margin-bottom:10px
z-index=1;
`;
const First = Styling.div`
color:white;
font-weight:bolder;
display:flex;
justify-content:space-between;
img{
  width:45%;
  background:yellow
}
p{
  width:50%;
  padding-top:25px;
}
`;
const Second = Styling.div`
font-weight:bolder;
color:white;
display:flex;
justify-content:space-between;
flex-direction: row-reverse;
img{
  width:45%;
  background:yellow
}
p{
  width:50%;
  padding-top:25px;
}
`;
const Third = Styling.div`
color:white;
font-weight:bolder;
display:flex;
justify-content:space-between;

img{
  width:45%;
}
p{
  width:50%;
  padding-top:25px;
}
 
`;
