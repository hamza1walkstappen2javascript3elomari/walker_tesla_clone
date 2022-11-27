import React from "react";
import styling from "styled-components";
import Section from "./Sections.jsx";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Toucheless Delivrey"
        backgroundImg="model-s.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For Toucheless Delivrey"
        backgroundImg="model-y.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online For Toucheless Delivrey"
        backgroundImg="model-3.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online For Toucheless Delivrey"
        backgroundImg="model-x.jpg"
        LeftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest  in America"
        description="Money-back Guarantee"
        backgroundImg="solar-panel.jpg"
        LeftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="solar roof"
        description="Money-back Guarantee"
        backgroundImg="solar-roof.jpg"
        LeftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accescoirs"
        description="Money-back Guarantee"
        backgroundImg="accessories.jpg"
        LeftBtnText="Order Now"
        rightBtnText="Learn more"
      />
    </Container>
  );
}
export default Home;
const Container = styling.div`
width:100%;
`;
