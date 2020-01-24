import styled from 'styled-components';

export const Section = styled.section`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
`;
export const SubSection = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const Title = styled.p`
  color: #6449e7;
  padding-top: 20px;
  font-size: 17px;
`;
export const SubTitle = styled.p`
  color: #222222;
  line-height: 1.4;
  text-transform: capitalize;
  font-size: 25px;
  font-weight: bold;
`;
export const MainSection = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.hr`
  width: 95%;
  color: #dee2e6;
`;
export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  width: 95%;
`;
export const MenueSection = styled.div`
  height: 10%;
  line-height: 10%;
  margin-bottom: 10px;
  width: 92%;
  text-align: left;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
`;

export const Span = styled.span`
  padding-left: 20px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  margin-top: 4px;
  &:hover {
    color: gray;
    cursor: pointer;
    border-bottom: 1px solid #6449e7;
  }
`;

export const Container = styled.div`
  width: 30%;
  height: 100%;
  margin: 10px;
  border: 1px solid white;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
`;
export const ImageCard = styled.div`
  height: 50%;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: 1s;
  opacity: 0.9;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const P = styled.p`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  color: white;
  font-weight: bold;
  background-color: #fa6742;
`;
export const DetailCard = styled.div`
  height: 200px;
`;
export const Place = styled.div`
  height: 40%;
`;
export const Name = styled(Title)`
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
export const Location = styled(Title)`
  color: #888;
  padding-top: 0;
  text-align: left;
  padding-left: 45px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
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
  height: 20%;
`;
export const Rate = styled.div``;
export const PriceSpan = styled.span``;
export const LocationP = styled.span`
  padding-left: 5px;
`;
