import styled from 'styled-components';
export const DetailCard = styled.div`
  height: 200px;
`;
export const Place = styled.div`
  height: 41%;
`;
export const Name = styled.p`
  color: black;
  padding-top: 10px;
  text-align: left;
  font-size: 20px;
  padding-left: 45px;
  letter-spacing: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
export const Location = styled.p`
  color: #888;
  padding-top: 0;
  text-align: left;
  padding-left: 45px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 47%;
  border-bottom: 1px solid gray;
`;
export const TopDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30%;
`;
export const BottomDetail = styled(TopDetail)``;
export const DetailSpan = styled.span`
  font-size: 14px;
  color: #222222;
  font-weight: 400;
  width: 60%;
  padding-left: 5px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 47%;
`;
export const Rate = styled.div``;
export const PriceSpan = styled.span``;
export const LocationP = styled.span`
  padding-left: 5px;
`;
