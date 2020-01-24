import React from 'react';
import { Icon } from 'antd';
import {
  Container,
  ImageCard,
  Image,
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
  LocationP,
  P
} from '../../components/popular';
import './style.css';

export const Card = ({
  source,
  name,
  location,
  detail1,
  detail2,
  detail3,
  detail4,
  price,
  type
}) => {
  return (
    <Container>
      <ImageCard>
        <Image src={source} />
        <P>{type}</P>
      </ImageCard>
      <DetailCard>
        <Place>
          <Name>{name}</Name>
          <Location className="icon">
            <Icon type="environment" theme="filled" color="red" />
            <LocationP> {location}</LocationP>
          </Location>
        </Place>
        <Details className="detailIcon">
          <TopDetail>
            <DetailSpan>
              <Icon type="bank" theme="filled" />{' '}
              <DetailSpan>{detail1}</DetailSpan>
            </DetailSpan>
            <DetailSpan>
              <Icon type="compass" theme="filled" />
              <DetailSpan>{detail2}</DetailSpan>
            </DetailSpan>
          </TopDetail>
          <BottomDetail>
            <DetailSpan>
              <Icon type="switcher" theme="filled" />
              <DetailSpan>{detail3}</DetailSpan>
            </DetailSpan>
            <DetailSpan>
              <Icon type="car" theme="filled" />
              <DetailSpan>{detail4}</DetailSpan>
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
          <PriceSpan>Starts From / {price} </PriceSpan>
        </Price>
      </DetailCard>
    </Container>
  );
};
