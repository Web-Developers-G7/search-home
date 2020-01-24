import styled from "styled-components";
export const Section = styled.section`
  height: 100vh;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    content: "";
    background: #f7f7f7;
  }
`;
export const Container = styled.div`
  display: flex;
  max-width: 1230px;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ImgContainer = styled.div`
  background-image: url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
  background-position: center;
  background-size: cover;
  height: 80%;
  width: 50%;
  z-index: 2;
  margin: auto 0;
`;

export const TextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 50px;
  align-items: flex-start;
`;

export const SmallTitle = styled.h4`
  font-size: 16px;
  color: #6449e7;
`;
export const BigTitle = styled.h2``;

export const Text = styled.p``;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;
export const Input = styled.input`
  border: 1px solid #f5f6f7;
  border-radius: 5px;
  padding: 15px 15px;
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
  padding: 11px 13px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  width: 30%;
  cursor: pointer;
  line-height: 31px;
`;
