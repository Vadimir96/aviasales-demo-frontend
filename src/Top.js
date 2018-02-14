import styled from "styled-components";
import roboto from "./fonts/Roboto-Regular.ttf";
import plane from "./images/aero-2.svg";
import calendar from "./images/calendar.svg";
import arrowleft from "./images/arrowleft.svg";
import arrowright from "./images/arrowright.svg";
import downarrow from "./images/downarrow.svg";
export const Aviasales = styled.div``;
export const Bg = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  @font-face {
    font-family: "Roboto-Regular";
    src: url(${roboto});
  }
  padding: 40px 6px;
`;

export const Logo = styled.img`
  padding: 12px 6px;
  position: absolute;
  top: 0;
`;

export const Text = styled.h1`
  font-family: "Roboto-Regular", sans-serif;
  font-size: 20px;
  font-style: medium;
  line-height: 23px;
  text-align: center;
  color: white;
  padding: 48px 6px 16px;
  margin: 0;
`;

export const Form_block = styled.form``;
export const Info_block = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const Formgroup = styled.div`
  flex: ${props => (props.bigger ? "2 100%" : "1 0px")};
  margin-right: ${props => (props.smaller ? "2px" : "0px")};
  position: relative;
  margin-bottom: 2px;
`;
export const Сountrytype = styled.span`
  display: block;
  top: 0;
  right: 45px;
  position: absolute;
  font-size: 16px;
  height: 54px;
  line-height: 55px;
  color: #a0b0b9;
  z-index: 3;
`;
export const Swaparrows = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 3;
  width: 16px;
  height: 16px;
  right: 16px;
  top: 19px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 8px;
    background: url(${arrowleft}) no-repeat;
    bottom: 0;
    left: 0;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 8px;
    background: url(${arrowright}) no-repeat;
    top: 0;
    left: 2px;
  }
`;
export const Textfield = styled.input`
  width: 100%;
  color: #4a4a4a;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  padding-top: 18px;
  padding-right: 67px;
  padding-bottom: 18px;
  padding-left: 16px;
  font-size: 16px;
  border: none;
  border-radius: ${props => (props.top ? "4px 4px 0 0" : "0px")};
`;
export const Calendar_block = styled.div`
  &::before {
    content: "";
    width: 17px;
    height: 20px;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    background: url(${calendar}) no-repeat;
    cursor: pointer;
  }
`;
export const Passangerinfo = styled.button`
  color: #4a4a4a;
  width: 100%;
  background-color: white;
  border-radius: 0 0 4px 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  font-size: 16px;
  text-align: left;
  border: none;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    height: 5px;
    width: 10px;
    background: url(${downarrow}) no-repeat;
    position: absolute;
    right: 16px;
    top: 24px;
  }
`;
export const Ticketstype = styled.span`
  color: #aeaeae;
`;
export const Flightbutton = styled.button`
  color: #ffffff;
  width: 100%;
  position: relative;
  background-color: #ff9241;
  border-radius: 4px;
  font-size: 24px;
  font-family: "Roboto-Regular", sans-serif;
  line-height: 28px;
  font-weight: 900;
  font-style: black;
  padding: 14px 94px 13px 52px;
  margin: 16px 0 0 0;
  border: none;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 25px;
    height: 21px;
    position: absolute;
    background: url(${plane}) no-repeat;
    top: 54%;
    right: 50%;
    margin-right: -113px;
    margin-top: -11px;
  }
`;
