import React from "react";
import {
  Nav,
  Container,
  Img,
  Ul,
  Li,
  Button,
  HeaderContainer,
  MainTitle
} from "../../components/navbar";
import logo from "../../images/logo-blue.png";

const Header = () => {
  return (
    <header>
      <Nav>
        <Container>
          <Img src={logo} alt="logo-img" />
        </Container>
        <Ul>
          <Li>aasd</Li>
          <Li>aasd</Li>
          <Li>aasd</Li>
          <Li>aasd</Li>
        </Ul>
        <Button>add property</Button>
      </Nav>
      <HeaderContainer height="85vh">
        <Container>
          <MainTitle>Let Us Guide You Home</MainTitle>
        </Container>
      </HeaderContainer>
    </header>
  );
};

export default Header;
