import React, { Component } from 'react';
import {
  Section,
  Title,
  SubTitle,
  SubSection,
  CardSection,
  MenueSection,
  Span,
  MainSection
} from '../../components/popular';
import { Card } from './card';
import { Data } from './data';

class Popular extends Component {
  state = { data: [] };

  forAll = () => {
    const forSale = Data.filter(card => card.type === 'For Sale');
    this.setState({ data: forSale });
  };

  forSale = () => {
    const forSale = Data.filter(card => card.type === 'For Sale');
    this.setState({ data: forSale });
  };

  forRent = () => {
    const forRent = Data.filter(card => card.type === 'For Rent');
    this.setState({ data: forRent });
  };
  render() {
    const { data } = this.state;
    return (
      <Section>
        <SubSection>
          <Title>Find rental properties anywhere</Title>
          <SubTitle>Discover Popular Properties</SubTitle>
        </SubSection>
        {data ? (
          <MainSection>
            <MenueSection>
              <Span onClick={this.forAll}>All Property</Span>
              <Span onClick={this.forSale}>For Sale</Span>
              <Span onClick={this.forRent}>For Rent</Span>
            </MenueSection>
            <CardSection>
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
            </CardSection>
          </MainSection>
        ) : null}
      </Section>
    );
  }
}
export default Popular;
