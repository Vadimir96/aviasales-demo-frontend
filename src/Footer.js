import styled from "styled-components";
import roboto from "./fonts/Roboto-Regular.ttf";

export const Footer = styled.div`
  @font-face {
    font-family: "Roboto-Regular";
    src: url(${roboto});
  }
  background-color: white;
`;
export const Footer_top = styled.div`
  padding: 1px 6px 24px 6px;
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid #e0e6e8;
  box-sizing: border-box;
`;

export const Footer_top_block = styled.div`
  flex: 1 50%;
  display: flex;
  flex-direction: column;
`;

export const Footer_top_block_name = styled.h1`
  font-family: "Roboto-Regular";
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin: 0px;
  padding-top: 31px;
  padding-bottom: 16px;
`;

export const Footer_top_block_element = styled.a`
  font-family: "Roboto-Regular";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin: 0px;
  padding-bottom: 12px;
`;

export const Footer_top_block_extension = Footer_top_block_name.extend`
  padding-bottom: 0px;
  padding-top: 4px;
`;
