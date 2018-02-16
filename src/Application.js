import styled from "styled-components";
import phoneSmall from "./images/phone320.png";
import phoneMedium from "./images/phone768.png";
import phoneLarge from "./images/phone1440.png";

export const Application_block = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);

  font-family: "Roboto";
`;
export const ApplicationInd = styled.div`
  position: relative;
  padding-bottom: 20px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 162px;
    height: 213px;
    background: url(${phoneSmall}) no-repeat;
    right: 50%;
    bottom: 0;
  }
  @media (min-width: 768px) {
    padding-bottom: 0;
    &::before {
      width: 237px;
      height: 312px;
      background: url(${phoneMedium}) no-repeat;
      right: 65%;
    }
  }
`;
export const ApplicationPhone = styled.img`
  position: absolute;
  bottom: 0;
  right: 54%;
  @media (min-width: 768px) {
    right: 65%;
  }
`;
export const ApplicationRating = styled.img`
  padding-right: 12px;
`;

export const ApplicationContent = styled.div`
  padding: 24px 12px 12px 12px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    margin: 0 0 0 38%;
  }
`;
export const ApplicatioText = styled.h1`
  font-family: "Roboto";
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  @media (min-width: 768px) {
    text-align: left;
    line-height: 40px;
    font-size: 32px;
  }
`;
export const RatingText = styled.h5`
  font-family: "Roboto";
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
`;
export const ApplicationList = styled.ul`
  list-style: none;
  margin-top: 56px;
  text-align: left;
  margin-left: 50%;
  padding: 0;
  @media (min-width: 768px) {
    text-align: left;
    margin-left: 0;
    margin-bottom: 42px;
    margin-top: 40px;
  }
`;
export const AppListEl = styled.li`
  padding: 6px 0;

  @media (min-width: 768px) {
    display: inline-block;
    padding: 0 21px;
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    &:last-child {
      border-right: 0;
    }
    &:first-child {
      padding-left: 0;
    }
  }
`;
export const ApplicationIcon = styled.img`
  position: absolute;
  left: 0;
  top: -2px;
  display: inline-block;
`;
export const ApplicationLink = styled.a`
  position: relative;
  line-height: 24px;
  padding-left: 26px;
  font-size: 14px;
  color: #ffffff;
`;
