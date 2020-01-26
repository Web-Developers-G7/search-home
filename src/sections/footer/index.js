import React, { Component } from "react";
import { Icon } from "antd";

// styled components
import {
  Footer,
  Container,
  Text,
  Span,
  IconSpan,
  MidTitle,
  List,
  Item,
  Link,
  Form,
  Input,
  Btn,
  LastTitle,
  TextSpan,
  CopyRight
} from "../../components/footer";
import { Img, Container as ImgContainer } from "../../components/navbar";
import logo from "../../images/logo-blue.png";

export class FooterSection extends Component {
  render() {
    return (
      <Footer>
        <Container>
          <ImgContainer>
            <Img src={logo} alt="logo-img" />
          </ImgContainer>
          <Text>
            The first step in selling your property is to get a valuation from
            local experts.
          </Text>
          <Span>
            <Icon type="environment" theme="filled" color="red" />
            <TextSpan> 13th North Ave, Florida, USA</TextSpan>
          </Span>
          <Span>
            <Icon type="mail" theme="filled" color="red" />
            <TextSpan> info@sarchholm.com</TextSpan>
          </Span>
          <Span>
            <Icon type="phone" theme="filled" color="red" />
            <TextSpan> +44 078 767 595</TextSpan>
          </Span>
        </Container>
        <Container>
          <MidTitle>Popular Searches</MidTitle>
          <List>
            <Item>
              <Link>Property for Rent</Link>
            </Item>
            <Item>
              <Link>Property for Sale</Link>
            </Item>
            <Item>
              <Link>Condominium for Sale</Link>
            </Item>
            <Item>
              <Link>Resale Properties</Link>
            </Item>
            <Item>
              <Link>Recent Properties</Link>
            </Item>
          </List>
        </Container>
        <Container>
          <MidTitle>Quick Links</MidTitle>
          <List>
            <Item>
              <Link>About us</Link>
            </Item>
            <Item>
              <Link>Contact us</Link>
            </Item>
            <Item>
              <Link>Privacy Policy</Link>
            </Item>
            <Item>
              <Link>FAQ</Link>
            </Item>
          </List>
        </Container>
        <Container>
          <MidTitle>Subscribe</MidTitle>
          <Form>
            <Input placeholder="Your Email Address..." />
            <Btn>Subscribe </Btn>
          </Form>
          <LastTitle>Follow us on</LastTitle>
          <IconSpan>
            <Icon type="facebook" theme="filled" color="red" />
            <Icon type="twitter" color="red" />
            <Icon type="youtube" theme="filled" color="red" />
            <Icon type="dribbble" color="red" />
          </IconSpan>
        </Container>
        <CopyRight>©Sarch-home 2020. All rights reserved.</CopyRight>
      </Footer>
    );
  }
}

export default FooterSection;
