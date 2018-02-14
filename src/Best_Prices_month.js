import styled from "styled-components";
import roboto from "./fonts/Roboto-Regular.ttf";

export const Best_Prices = styled.div`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  padding: 30px 6px 10px;
  @font-face {
    font-family: "Roboto-Regular";
    src: url(${roboto});
  }
`;
export const Card_Best_Prices = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  border-bottom: ${props => (props.last ? "" : "1px dashed #afbec6")};
  margin: ${props => (props.last ? "0 auto 40px" : "0 auto 50px")};
`;
export const Calendar_Prices = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
export const Calendaricon = styled.img``;

export const Calendarheader = styled.h1`
  font-family: "Roboto-Regular", sans-serif;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
  margin-left: 33px;
  margin-right: 32px;
  color: #4a4a4a;
`;
export const Countryblock = styled.div``;
export const Country_Prices = styled.div`
  margin-bottom: 24px;
`;
export const Countryimages = styled.img``;
export const Countryimage = styled.div`
  display: inline-block;
  width: 40px;
  margin-right: 5px;
  box-sizing: border-box;
`;
export const Country_Text = styled.div`
  display: inline-block;
`;
export const Town_Text = styled.h3`
  font-weight: bold;
  font-family: "Roboto-Regular", sans-serif;
  line-height: 32px;
  font-size: 22px;
  margin: 0;
  color: #5b5b5c;
`;
export const CountryText = styled.h5`
  font-weight: 500;
  font-family: "Roboto-Regular", sans-serif;
  text-transform: uppercase;
  line-height: 20px;
  font-size: 12px;
  margin: 0;
  color: #a0b0b9;
`;

export const List_Country = styled.div``;
export const ElementList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  padding: 5px 8px 16px;
`;

export const DetailsElement = styled.a`
  color: ${props => (props.link ? "#4A4A4A" : "#00BAE8")};
  line-height: 20px;
  font-size: 16px;
  text-decoration: none;
`;
export const MainText = styled.h4`
  font-family: "Roboto-Regular", sans-serif;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  padding: 0 10px;
`;
export const LittleText = styled.h5`
  font-family: "Roboto-Regular", sans-serif;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
`;
