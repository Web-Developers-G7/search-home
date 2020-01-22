import React from "react";
import {
  Nav,
  Container,
  Img,
  Ul,
  Li,
  Button,
  HeaderContainer,
  MainTitle,
  FormContainer,
  Form,
  Input,
  Select,
  Option,
  Header,
  ContainerBottom,
  SearchBtn
} from "../../components/navbar";
import logo from "../../images/logo-blue.png";

const HeaderSection = () => {
  return (
    <Header>
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
        <ContainerBottom>
          <MainTitle>Let Us Guide You Home</MainTitle>
          <FormContainer>
            <Form>
              <Input
                type="text"
                placeholder="Enter Property, Location, Landmark..."
              />
              <Select id="select-area">
                <Option value="">Select Area</Option>
                <Option value="Gaza">Gaza</Option>
                <Option value="Khanyounis">Khanyounis</Option>
              </Select>
              <Select id="select-city">
                <Option value="">Select City</Option>
                <Option value="london">london</Option>
                <Option value="newyork">newyork</Option>
              </Select>
              <SearchBtn>Search</SearchBtn>
            </Form>
          </FormContainer>
        </ContainerBottom>
      </HeaderContainer>
    </Header>
  );
};

export default HeaderSection;
