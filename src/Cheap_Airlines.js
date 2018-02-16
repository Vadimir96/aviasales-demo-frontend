import styled from "styled-components";

export const AirlinesMain = styled.div`
  background: #ffffff;
  display: none;
  font-family: "Roboto";
  @media (min-width: 768px) {
    display: block;
    padding: 24px 8.5px 32px 8.5px;
  }
`;
export const AirlinesBlock = styled.div`
  @media (min-width: 768px) {
    position: relative;
  }
`;
export const AirlinesHeader = styled.h1`
  @media (min-width: 768px) {
    ont-family: "Roboto";
    text-align: center;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    font-size: 32px;
    text-align: center;

    color: #5c5c5c;
  }
`;
export const AirlinesBlockContent = styled.div`
  @media (min-width: 768px) {
    margin: 24px 60px 0;
  }
`;
export const AirlinesSlideOne = styled.div`
  @media (min-width: 768px) {
    text-align: center;
  }
`;
export const AirlinesSlideNav = styled.div`
  @media (min-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;
export const AirlinesSlideNavOl = styled.span`
  @media (min-width: 768px) {
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
    width: 10px;
    background: ${props => (props.active ? "#818181" : "#ffff")};
    height: 10px;
    color: #818181;
    border: 1px solid #818181;
    margin-right: 8px;
  }
`;
export const AirlinesSlideLogotypes = styled.img`
  @media (min-width: 768px) {
    vertical-align: middle;
    margin: 11px 25px 0;
  }
`;
export const AirlinesSlideDirection = styled.img`
  @media (min-width: 768px) {
    position: absolute;
    cursor: pointer;
    top: 50%;
    ${props => (props.direction ? "left: 0" : "right: 0")};
  }
`;
