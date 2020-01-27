import React, { Component } from "react";
import { Carousel } from "antd";
import {
  Section,
  Title,
  SubTitle,
  SubSection,
  CardSection,
  MainSection
} from "../../components/recent";
import { Card } from "./card";
import { Data } from "./data";
import "./style.css";

class Recent extends Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data: Data });
  }

  render() {
    const { data } = this.state;
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Section id="recent">
        <SubSection>
          <Title>Browse some of our</Title>
          <SubTitle>Recent Properties</SubTitle>
        </SubSection>
        <MainSection>
          <CardSection className="container">
            <Carousel {...settings}>
              {data.map(card => (
                <Card
                  source={card.url}
                  name={card.name}
                  location={card.location}
                  detail1={card.detail1}
                  detail2={card.detail2}
                  detail3={card.detail3}
                  detail4={card.detail4}
                  price={card.price}
                  type={card.type}
                />
              ))}
            </Carousel>
          </CardSection>
        </MainSection>
      </Section>
    );
  }
}
export default Recent;
