import styled from "styled-components";
import band from "./images/Rectangle 3-1.png";

export const MainDispatch = styled.div`
  background: #ffffff;
  font-family: "Roboto";
  display: none;
  @media (min-width: 768px) {
    padding-bottom: 20px;
    display: block;
  }
`;
export const DispatchBlock = styled.div`
  position: relative;
  @media (min-width: 768px) {
    &::after {
      content: "";
      position: absolute;
      background: url(${band}) 51% 0;
      background-repeat-y: no-repeat;
      height: 9px;
      top: 0;
      right: 0;
      left: 0;
    }
  }
`;
export const DispatchTextBlock = styled.div`
  @media (min-width: 768px) {
    padding: 32px 0 0;
    margin: 0 30%;
  }
`;
export const DispatchHeader = styled.h3`
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    color: #5c5c5c;
  }
`;
export const DispatchTextwishes = styled.h4`
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    font-size: 16px;
    margin-top: 0;
    text-align: center;
    color: #5c5c5c;
  }
`;
export const DispatchList = styled.ul`
  @media (min-width: 768px) {
    list-style: none;
    text-align: center;
    margin-top: 20px;
    padding: 0;
  }
`;
export const DispatchListSocial = styled.li`
  @media (min-width: 768px) {
    display: inline-block;
    margin: 0 3px;
  }
`;
export const DispatchListSocialLink = styled.a`
  @media (min-width: 768px) {
  }
`;
export const DispatchListSocialLinkImg = styled.img`
  @media (min-width: 768px) {
  }
`;
export const DispatchSendBlock = styled.div`
  @media (min-width: 768px) {
    text-align: center;
    margin: 0 30%;
  }
`;
export const DispatchField = styled.input`
  @media (min-width: 768px) {
    font-family: "Roboto";
    background: #ffffff;
    border: 1px solid #a0b0b9;
    box-sizing: border-box;
    border-radius: 2px;
    font-style: normal;
    font-weight: normal;
    padding: 7px 141px 7px 13px;
    line-height: 20px;
    font-size: 16px;
    color: #5c5c5c;
    width: 100%;
  }
`;
export const DispatchForm = styled.form`
  @media (min-width: 768px) {
    position: relative;
  }
`;
export const DispatchFormButton = styled.button`
  @media (min-width: 768px) {
    font-family: "Roboto";
    background: #ff8e41;
    border-radius: 2px;
    border: 0;
    font-style: normal;
    padding: 8px 20px 6px;
    position: absolute;
    font-weight: normal;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    top: 1px;
    right: 0;
    color: #ffffff;
  }
`;
