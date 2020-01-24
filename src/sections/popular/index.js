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
  state = { data: [], status: false, status1: false, status2: false };

  componentDidMount() {
    if (Data.length >= 3) {
      const lastData = Data.slice(-3);
      this.setState({ data: lastData, status: true });
    }
  }

  forAll = () => {
    // if (Data.length >= 3) {
    //   const lastData = Data.slice(-3);
    //   this.setState({
    //     data: lastData,
    //     status: true,
    //     status1: false,
    //     status2: false
    //   });
    // }
    this.setState({
      data: Data,
      status: true,
      status1: false,
      status2: false
    });
  };
  forSale = () => {
    const forSale = Data.filter(card => card.type === 'For Sale');
    this.setState({
      data: forSale,
      status1: true,
      status2: false,
      status: false
    });
  };

  forRent = () => {
    const forRent = Data.filter(card => card.type === 'For Rent');
    this.setState({
      data: forRent,
      status2: true,
      status1: false,
      status: false
    });
  };
  render() {
    const { data, status1, status2, status } = this.state;
    return (
      <Section className={status ? 'activeAll' : 'notActiveAll'}>
        <SubSection>
          <Title>Find rental properties anywhere</Title>
          <SubTitle>Discover Popular Properties</SubTitle>
        </SubSection>
        <MainSection>
          <MenueSection>
            <Span
              className={status ? 'active' : 'notActive'}
              onClick={this.forAll}
            >
              All Property
            </Span>
            <Span
              className={status1 ? 'active' : 'notActive'}
              onClick={this.forSale}
            >
              For Sale
            </Span>
            <Span
              className={status2 ? 'active' : 'notActive'}
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
