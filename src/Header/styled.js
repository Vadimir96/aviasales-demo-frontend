import styled from "styled-components";
import logo from "./logo.svg";
import plane from "./aero-2.svg";
import calendar from "./calendar.svg";
import arrowleft from "./arrowleft.svg";
import arrowright from "./arrowright.svg";
import downarrow from "./downarrow.svg";

export const Container = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding: 10px 0 60px 0;
  @media (min-width: 768px) {
    background: linear-gradient(
      126.97deg,
      #00b0de -13.66%,
      #01aedc -9.98%,
      #02abdb -6.26%,
      #02abdb -2.56%,
      #02abdb -2.34%,
      #196ebd 85.88%
    );
  }
  @media (min-width: 1440px) {
    background: linear-gradient(
      119.26deg,
      #00b0de -25.78%,
      #01aedc -22.1%,
      #02abdb -18.38%,
      #02abdb -14.68%,
      #02abdb -14.46%,
      #196ebd 73.68%
    );
  }
`;

export const LogoLink = styled.a``;
export const BlockLogo = styled.div`
  position: relative;
  max-width: 1224px;
  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 12px;
    width: 30px;
    height: 29px;
    background: url(${logo}) no-repeat;
  }
`;
export const Logo = styled.p`
  display: none;
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  position: absolute;
  left: 50px;
  top: 12px;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Date = styled.div`
  display: flex;
  flex: 1 48%;
  @media (min-width: 768px) {
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex: 1 48%;
  }
  @media (min-width: 1440px) {
    flex: 1 24%;
  }
`;
export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: medium;
  line-height: 23px;
  text-align: center;
  color: white;
  padding: 48px 6px 16px;
  margin: 0;
  @media (min-width: 768px) {
    font-weight: bold;
    line-height: 48px;
    font-size: 32px;
    padding: 48px 6px 8px;
  }
  @media (min-width: 1440px) {
    font-weight: bold;
    font-size: 40px;
    padding: 110px 6px 8px;
  }
`;
export const Process = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 40px;
  }
`;

export const FlightOrder = styled.form``;
export const CustomerData = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const Group = styled.div`
  flex: ${props => (props.city ? "2 100%" : "1 0px")};
  position: relative;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    flex: ${props => (props.city ? "1 48%;" : "1 0px")};
    justify-content: center;
    display: ${props => (props.center ? "flex" : "")};
  }
  @media (min-width: 1440px) {
    flex: ${props => (props.city ? "1 24%;" : "1 0px")};
    margin-right: ${props => (props.cityarrival ? "2px;" : "")};
  }
`;
export const Country = Group.extend`
  @media (min-width: 768px) {
    margin-right: 2px;
  }
`;
export const FlightDate = Group.extend`
  margin-right: ${props => (props.date ? "2px" : "0px")};
`;
export const FormTickt = Group.extend`
  @media (min-width: 768px) {
    margin-left: 2px;
  }
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
export const PassengerData = styled.input`
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
  @media (min-width: 768px) {
    border-radius: 0;
  }
  @media (min-width: 768px) {
    padding-right: 34px;
  }
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
  line-height: 18px;
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
  @media (min-width: 768px) {
    border-radius: 0;
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
  font-size: 22px;
  font-family: "Roboto", sans-serif;
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
  @media (min-width: 768px) {
    width: auto;
    margin: 40px 0 40px 0;
  }
  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;
