import React from 'react';
import { Carousel } from 'antd';
import Slider from 'react-slick';
import { Icon } from 'antd';

import { Data } from './data';
import {
  DetailCard,
  Location,
  Name,
  Details,
  TopDetail,
  BottomDetail,
  DetailSpan,
  Place,
  Price,
  Rate,
  PriceSpan,
  LocationP
} from '../../components/topRated';
import './style.css';

class TopRated extends React.Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data: Data });
  }
  render() {
    const { data } = this.state;
    var settings = {
      dots: true,
      infinite: false,
      fade:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
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
      <Carousel {...settings}>
        {data
          ? data.map(card => (
              <div className="rated-section">
                <img className="rated-image" src={card.url} alt="pic" />
                <div className="rated-detail">
                  <DetailCard>
                    <Place>
                      <Name className="title">{card.name}</Name>
                      <Location className="title_icon">
                        <Icon type="environment" theme="filled" color="red" />
                        <LocationP> {card.location}</LocationP>
                      </Location>
                    </Place>
                    <Details className="detailIcon">
                      <TopDetail>
                        <DetailSpan>
                          <Icon type="bank" theme="filled" />
                          <DetailSpan>{card.detail1}</DetailSpan>
                        </DetailSpan>
                        <DetailSpan>
                          <Icon type="compass" theme="filled" />
                          <DetailSpan>{card.detail2}</DetailSpan>
                        </DetailSpan>
                      </TopDetail>
                      <BottomDetail>
                        <DetailSpan>
                          <Icon type="switcher" theme="filled" />
                          <DetailSpan>{card.detail3}</DetailSpan>
                        </DetailSpan>
                        <DetailSpan>
                          <Icon type="car" theme="filled" />
                          <DetailSpan>{card.detail4}</DetailSpan>
                        </DetailSpan>
                      </BottomDetail>
                    </Details>
                    <Price>
                      <Rate className="rateIcon">
                        <Icon type="star" theme="filled" />
                        <Icon type="star" theme="filled" />
                        <Icon type="star" theme="filled" />
                        <Icon type="star" theme="filled" />
                      </Rate>
                      <PriceSpan>Starts From / {card.price} </PriceSpan>
                    </Price>
                  </DetailCard>
                </div>
              </div>
            ))
          : null}
      </Carousel>
    );
  }
}

export default TopRated;
