import styled from "styled-components";
import bgHeader from "../images/headerBg.jpeg";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(153, 153, 153, 0.22);
`;

export const Container = styled.div`
  height: ${props => (props.height ? props.height : "auto")};
`;

export const HeaderContainer = styled(Container)`
  background-image: linear-gradient(
      to right bottom,
      rgba(200, 200, 200, 0.4),
      rgba(0, 0, 0, 0.8)
    ),
    url(${bgHeader});
  background-position: bottom;
  background-size: cover;
`;

export const Img = styled.img`
  width: 200px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  padding: 0;
`;
export const Li = styled.li`
  list-style: none;
  display: inline-block;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Title = styled.h1``;

export const MainTitle = styled(Title)``;
