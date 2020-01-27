import React from "react";
import {
  Container,
  ImageCard,
  Image,
  H3,
  Span
} from "../../components/CityComponent";

const Card = ({ card: { url, PropertiesNumbler, location } }) => {
  return (
    <>
      <Container className="container">
        <ImageCard>
          <Span>{location}</Span>
          <Image src={url} />
        </ImageCard>
      </Container>
      <H3>{PropertiesNumbler} Property Listings</H3>
    </>
  );
};

export default Card;
