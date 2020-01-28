import React, { Component } from "react";
import {
  Section,
  Title,
  SubTitle,
  SubSection,
  CardSection,
  MenueSection,
  Span,
  MainSection
} from "../../components/popular";
import { Card } from "./card";
import { Data } from "./data";

class Popular extends Component {
  state = { data: [], status: false, saleStatus: false, rentStatus: false };

  componentDidMount() {
    if (Data.length >= 3) {
      const lastData = Data.slice(-3);
      this.setState({ data: lastData, status: true });
    }
  }

  forAll = () => {
    this.setState({
      data: Data,
      status: true,
      saleStatus: false,
      rentStatus: false
    });
  };
  forSale = () => {
    const forSale = Data.filter(card => card.type === "For Sale");
    this.setState({
      data: forSale,
      saleStatus: true,
      rentStatus: false,
      status: false
    });
  };

  forRent = () => {
    const forRent = Data.filter(card => card.type === "For Rent");
    this.setState({
      data: forRent,
      rentStatus: true,
      saleStatus: false,
      status: false
    });
  };
  render() {
    const { data, saleStatus, rentStatus, status } = this.state;
    return (
      <Section className={status ? "activeAll" : "notActiveAll"} id="popular">
        <SubSection>
          <Title>Find rental properties anywhere</Title>
          <SubTitle>Discover Popular Properties</SubTitle>
        </SubSection>
        <MainSection>
          <MenueSection>
            <Span
              className={status ? "active" : "notActive"}
              onClick={this.forAll}
            >
              All Property
            </Span>
            <Span
              className={saleStatus ? 'active' : 'notActive'}
              onClick={this.forSale}
            >
              For Sale
            </Span>
            <Span
              className={rentStatus ? 'active' : 'notActive'}
              onClick={this.forRent}
            >
              For Rent
            </Span>
          </MenueSection>
          <CardSection className="container">
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
      </Section>
    );
  }
}
export default Popular;
