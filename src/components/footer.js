import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap;
  background-color: #ddd;
`;

export const Container = styled.div`
  text-align: left;
  flex: 2;
  &:first-child > div > img {
    padding: 0 0 0 20px;
  }
  padding: 20px;
`;

export const LastContainer = styled(Container)`
  marign-top: 50px;
`;

export const Text = styled.p`
  padding: 20px;
  text-align: left;
  margin-top: 10px;
`;

export const Span = styled.span`
  display: inline-block;
  min-width: 100%;
  text-align: left;
  padding: 10px 20px;
`;

export const IconSpan = styled(Span)`
  display: inline;
  font-size: 25px;
  padding-left: 0;
  & > i {
    margin-right: 15px;
  }
`;

export const TextSpan = styled(IconSpan)`
  font-size: 14px;
  margin-left: 10px;
`;

export const MidTitle = styled.h2`
  font-weight: bolder;
`;
export const LastTitle = styled(MidTitle)`
  margin-top: 70px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  list-style: none;
  margin: 25px 0;
  width: fit-content;
`;
export const Link = styled.a`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s linear;
  &::after {
    content: "";
    display: block;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.8);
    width: 0;
    transition: all 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;
export const Input = styled.input`
  border: 1px solid #f5f6f7;
  border-radius: 5px;
  padding: 10px 10px;
  position: relative;
  width: 70%;
  box-shadow: 0 9px 15px rgba(221, 221, 221, 0.77);
  color: #888;
  outline: none;
  &:focus {
    border: 1px solid black;
    border-right: none;
  }
`;
export const Btn = styled.button`
  background: transparent;
  border: none;
  background: #fa6742;
  color: #fff;
  padding: 0px 8px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  width: 30%;
  cursor: pointer;
  line-height: 31px;
`;

export const CopyRight = styled.p`
  width: 1200px;
`;
