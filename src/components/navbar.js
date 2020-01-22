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

export const MainTitle = styled(Title)`
  color: #fff;
  margin-bottom: 10px;
`;

export const FormContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  display: flex;
  border-radius: 5px;
`;
export const ContainerBottom = styled(Container)`
  position: absolute;
  bottom: 100px;
  width: 90%;
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
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  padding: 0 30px;
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const Input = styled.input`
  padding: 4px 15px 0 45px;
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 45px;
  width: 30%;
  outline: none;
  border-bottom: 3px solid transparent;
  &:focus {
    border-bottom: 3px solid green;
  }
`;

export const Select = styled.select`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: none;
  outline: none;
  font-size: 15px;
  height: 45px;
  background: #fff;
  line-height: 30px;
  width: 12%;
  padding: 10px 0;
`;
export const Option = styled.option``;

export const SearchBtn = styled(Button)`
  padding: 10px 35px;
  line-height: 1.2;
  border-radius: 3px;
  background: #6449e7;
  border: 1px solid transparent;
  color: #fff !important;
  transition: 0.3s;
  display: inline-block;
  // font-size: 15px;
  font-weight: 400;
  margin: 0;
`;
