import styled from "styled-components";
export const Container = styled.div`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  padding: 30px 6px 10px;

  @media (min-width: 768px) {
    padding: 30px 72px 10px;
  }
`;
export const PopularCountries = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const Offer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  border-bottom: ${props => (props.last ? "" : "1px dashed #afbec6")};
  margin: ${props => (props.last ? "0 auto 40px" : "0 auto 50px")};
  padding-bottom: 24px;

  @media (min-width: 1440px) {
    margin: 0;
    flex: 1 auto;
    padding: 0 44px 0 44px;
    border-right: ${props => (props.last ? "" : "1px dashed #afbec6")};
    border-bottom: 0;
  }
`;
export const Calendar = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
export const CalendarIcon = styled.img``;

export const CalendarHeader = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
  margin-left: 28px;
  margin-right: 28px;
  color: #4a4a4a;
  @media (min-width: 768px) {
    line-height: 36px;
    font-size: 24px;
  }
`;
export const DirectionDescription = styled.div`
  margin-bottom: 24px;
`;
export const FlagImage = styled.img``;
export const Flag = styled.div`
  display: inline-block;
  width: 40px;
  margin-right: 5px;
  box-sizing: border-box;
`;
export const Direction = styled.div`
  display: inline-block;
`;
export const CityName = styled.p`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  line-height: 32px;
  font-size: 22px;
  margin: 0;
  color: #5b5b5c;
`;
export const CountryName = styled.p`
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  line-height: 20px;
  font-size: 12px;
  margin: 0;
  color: #a0b0b9;
`;

export const FlightOriginsList = styled.div``;
export const ListElement = styled.div`
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
export const CheapTickets = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  padding: 0 10px;
  @media (min-width: 768px) {
    line-height: 26px;
  }
  @media (min-width: 1440px) {
    width: 60%;
    margin: 80px auto 0;
  }
`;
export const OfferWarning = styled.p`
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
  @media (min-width: 768px) {
    line-height: 20px;
  }
`;
