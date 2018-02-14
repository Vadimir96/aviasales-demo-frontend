import styled from "styled-components";
import roboto from "./fonts/Roboto-Regular.ttf";

export const Footer_block = styled.div`
  background: #ffffff;
  padding: 24px 6px 24px 6px;
  @font-face {
    font-family: "Roboto-Regular";
    src: url(${roboto});
  }
  font-family: "Roboto-Regular";
`;

export const Footer_Content = styled.div``;
export const Footer_Content_List = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  ${props =>
    props.links
      ? "margin-right: 50px;color: #5b5b5c;"
      : "color: #4A4A4A;display: flex; flex-flow: row wrap; justify-content: space-between; "};
`;
export const Footer_Content_List_Element = styled.li`
  display: inline-block;
  margin-right: 4px;
  line-height: 16px;
  ${props =>
    props.social ? "padding-bottom:12px;margin-right:0px; flex: 1 0 33%" : ""};
`;
export const Footer_Content_Link = styled.a`
  font-size: 12px;
`;
export const Footer_Content_Hotels = styled.div`
  text-align: center;
  padding-top: 12px;
`;
export const Footer_Content_Img = styled.img`
  margin-right: 4px;
`;

export const Footer_Content_Link_Buttons_Block = styled.div`
  margin: 0px;
  margin-top: 16px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const Footer_Content_Link_Button = Footer_Content_Link.extend`
  /*padding: 5px 10px 5px 10px;*/
  display: block;
  margin: 5px auto;
`;

export const Footer_Content_Link_Buttons_Block_Inside = styled.div`
  margin: 0px;
  display: block;
  color: black;
  background: #1e292d;
  border-radius: 5px;
  padding: 6px 18px 6px 12px;
  ${props => (props.play ? "padding-right:10px;" : "")};
  ${props => (props.win ? "padding-right:23px;" : "")};
`;

export const Footer_Content_Link_Button_Img = styled.img`
  padding: 0px 10px 0px 0px;
`;

export const Footer_Content_Link_Button_Txt = styled.div`
  display: inline-block;
`;

export const Footer_Content_Link_Button_Txt_small = styled.h1`
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  color: white;
  font-size: 9px;
  margin-left: 43px;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
`;

export const Footer_Content_Link_Button_Txt_bold = Footer_Content_Link_Button_Txt_small.extend`
  font-weight: bold;
  font-size: 12px;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
`;

export const Footer_Content_end = styled.h1`
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;

  color: #5b5b5c;
  text-align: center;
`;
