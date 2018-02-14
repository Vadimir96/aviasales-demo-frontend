import styled from "styled-components";
import roboto from "./fonts/Roboto-Regular.ttf";

export const Paragraph_block = styled.div`
  background: #ffffff;
  padding: 30px 6px 10px;
  @font-face {
    font-family: "Roboto-Regular";
    src: url(${roboto});
  }
`;
export const Paragraph_Text = styled.div``;
export const Paragraph_Card = styled.div``;
export const Paragraph_Head = styled.h3`
  text-transform: uppercase;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
`;
export const Paragraph_Icon = styled.img`
  margin-right: 9px;
  box-sizing: border-box;
  vertical-align: top;
`;
export const Paragraph_Description = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
`;

export const Paragraph_Link = styled.a`
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
`;
