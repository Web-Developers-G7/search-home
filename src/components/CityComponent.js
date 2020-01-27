import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  margin: 10px;
  border: 1px solid white;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  background-color: gray;
  border-radius: 5px;
`;
export const ImageCard = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  border-radius: 10px;
`;
export const Image = styled.img`
  width: 100%;
  min-height: 100%;
  transition: 1s;
  opacity: 0.9;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Span = styled.span`
  position: absolute;
  background: #fff;
  z-index: 55;
  top: 20px;
  left: 15px;
  padding: 5px;
  border-radius: 4px;
`;

export const H3 = styled.h3`
  line-height: 1.2;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: left;
  padding: 10px 20px;
  font-weight: bolder;
`;
export const DetailCard = styled.div`
  // height: 20px;
`;
