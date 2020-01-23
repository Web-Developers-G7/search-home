import React from "react";
import {
  Section,
  Container,
  ImgContainer,
  TextContainer,
  SmallTitle,
  BigTitle,
  Text,
  Form,
  Input,
  Btn
} from "../../components/validationsComponent";

const Valuation = () => {
  return (
    <Section>
      <Container>
        <ImgContainer />
        <TextContainer>
          <SmallTitle>Get a property Valuation</SmallTitle>
          <BigTitle>How Much Is My Property Worth?</BigTitle>
          <Text>
            The first step in selling your property is to get a valuation from
            local experts. They will inspect your home and take into account its
            unique features, the area and market conditions before providing you
            with the most accurate valuation.
          </Text>
          <Form>
            <Input placeholder="Enter Your Property Address..." />
            <Btn>Price My Property </Btn>
          </Form>
        </TextContainer>
      </Container>
    </Section>
  );
};

export default Valuation;
