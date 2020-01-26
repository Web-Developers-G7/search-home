import React, { Component } from "react";
import { Carousel } from "antd";
import { data } from "./data";
import Card from "./card";
import { Title, SubTitle, SubSection } from "../../components/popular";

export class CityProperty extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      // infinite: false,
      // fade: true,
      // speed: 500
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
      <>
        <SubSection>
          <Title>Browse popular properties around the world</Title>
          <SubTitle>Find Properties In Your City</SubTitle>
        </SubSection>
        <Carousel {...settings}>
          {data.map(card => (
            <Card card={card} key={card.url} />
          ))}
        </Carousel>
      </>
    );
  }
}

export default CityProperty;
