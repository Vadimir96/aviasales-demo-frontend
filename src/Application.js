import styled from "styled-components";
import roboto from "./fonts/Roboto-Regular.ttf";

export const Application_block = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  @font-face {
    font-family: "Roboto-Regular";
    src: url(${roboto});
  }
  font-family: "Roboto-Regular";
`;
export const ApplicationInd = styled.div`
  position: relative;
  padding-bottom: 20px;
`;
export const ApplicationPhone = styled.img`
  position: absolute;
  bottom: 0;
  right: 54%;
`;
export const ApplicationRating = styled.img`
  padding-right: 12px;
`;

export const ApplicationContent = styled.div`
  padding: 24px 12px 12px 12px;
  text-align: center;
`;
export const ApplicatioText = styled.h1`
  font-family: "Roboto-Regular";
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;
export const RatingText = styled.h5`
  font-family: "Roboto-Regular";
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
`;
export const AppListEl = styled.li`
  padding: 6px 0;
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
