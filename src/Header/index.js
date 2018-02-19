import React from "react";
import {
  Container,
  LogoLink,
  BlockLogo,
  Logo,
  Process,
  Text,
  Date,
  FlightOrder,
  CustomerData,
  Group,
  Country,
  FlightDate,
  FormTickt,
  PassengerData,
  Сountrytype,
  Swaparrows,
  Passangerinfo,
  Calendar_block,
  Ticketstype,
  Flightbutton
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <LogoLink>
        <BlockLogo>
          <Logo>aviasales</Logo>
        </BlockLogo>
      </LogoLink>
      <Text>Поиск дешевых авиабилетов</Text>
      <Process>Лучший способ купить авиабилеты дешево</Process>
      <FlightOrder>
        <CustomerData>
          <Country city>
            <PassengerData top placeholder="Город отправления" />
            <Сountrytype>MOW</Сountrytype>
            <Swaparrows />
          </Country>
          <Group city cityarrival>
            <PassengerData placeholder="Город прибытия" />
          </Group>
          <Date>
            <FlightDate date>
              <Calendar_block />
              <PassengerData placeholder="Туда" />
            </FlightDate>
            <FlightDate>
              <Calendar_block />
              <PassengerData placeholder="Обратно" calendar />
            </FlightDate>
          </Date>
          <FormTickt city>
            <Passangerinfo>
              1 пассажир,
              <Ticketstype> эконом</Ticketstype>
            </Passangerinfo>
          </FormTickt>
          <Group city center>
            <Flightbutton>Найти билеты</Flightbutton>
          </Group>
        </CustomerData>
      </FlightOrder>
    </div>
  </Container>
);
