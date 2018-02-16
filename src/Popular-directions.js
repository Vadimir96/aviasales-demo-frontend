import styled from "styled-components";

export const Pop_dir = styled.div`
  background-color: #f8fcff;
  padding-top: 53px;
  padding-right: 6px;
  padding-left: 6px;
  @media (min-width: 768px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;
export const FondCompass = styled.div`
  background: #e2f8ff;
  margin: 0 auto;
  width: 38px;
  height: 38px;
  padding: 16px;
  border-radius: 50px;
`;
export const Compass = styled.img`
  display: flex;
  margin: 0px auto;
`;
export const PD_title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin: 24px 16px 0 16px;
  padding: 2px 20px 0px 20px;
  color: #4a4a4a;
`;
export const City_name = PD_title.extend`
  color: #00ace2;
  padding-top: 0px;
  margin-top: 0px;
`;
export const Pencil = styled.img`
  margin-left: 8px;
`;

export const Underline = styled.img`
  margin-bottom: 9px;
`;

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0px;
`;

export const List_unit = styled.li`
  box-sizing: border-box;
  flex: 1 33%;

  @media (min-width: 768px) {
    flex: auto;
  }
`;

export const List_div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List_img = styled.img`
  display: flex;
  margin: auto;
  align-self: center;
`;

export const List_text = styled.h3`
  box-sizing: border-box;
  max-width: 64px;
  margin-top: 2px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: ${props => (props.chosen ? "#5C5C5C" : "#00ACE2;")};
  ${props => (props.chosen ? "margin-bottom: 2px;" : "")};
`;

export const Cardholder = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fcff;
  padding: 0 20%;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Card = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  min-width: 308px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const PopCityImg = styled.img`
  box-sizing: border-box;
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

export const PopDirectionFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 0 0 8px 8px;
`;

export const PopDirectionBlock = styled.div`
  background-color: white;
`;
export const PopDirectionFlag = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    padding-left: 20px;
  }
`;
export const PopDirectionImage = styled.img``;
export const PopDirectionCountry = styled.div`
  display: inline-block;
`;
export const PopInfoBlock = styled.div`
  background-color: white;
  justify-content: flex-end;
`;

export const PopCityName = styled.h1`
  margin: 16px 16px 4px 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5b5b5c;
`;

export const PopCityCountry = styled.h1`
  margin: 0px 0px 12px 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;

  color: #a0b0b9;
`;

export const PopCityPrice = styled.h1`
  margin: 16px 10px 4px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-align: right;

  color: #00bae8;
`;

export const PopCityDate = styled.h1`
  margin: 0px 10px 12px 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: right;

  color: #a0b0b9;
`;
