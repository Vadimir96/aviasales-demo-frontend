import React from "react";
import calendarprice from "./calendar-prices.svg";
import russ from "./rus.svg";
import arm from "./arm.svg";
import mol from "./mol.svg";

import {
  Container,
  PopularCountries,
  Offer,
  Calendar,
  CalendarIcon,
  CalendarHeader,
  DirectionDescription,
  FlagImage,
  Flag,
  Direction,
  CityName,
  CountryName,
  FlightOriginsList,
  ListElement,
  DetailsElement,
  CheapTickets,
  OfferWarning
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Calendar>
        <CalendarIcon src={calendarprice} alt="calendar" />
      </Calendar>
      <CalendarHeader>
        Лучшие цены на авиабилеты за последний месяц
      </CalendarHeader>
      <PopularCountries>
        <Offer>
          <DirectionDescription>
            <Flag>
              <FlagImage src={russ} alt="calendar" />
            </Flag>
            <Direction>
              <CityName>Симферополь (Крым)</CityName>
              <CountryName>Крым</CountryName>
            </Direction>
          </DirectionDescription>
          <FlightOriginsList>
            <ListElement>
              <DetailsElement link>Из Москвы</DetailsElement>
              <DetailsElement>от 4 813 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Санкт-Петербурга</DetailsElement>
              <DetailsElement>от 7 857 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Новосибирска</DetailsElement>
              <DetailsElement>от 15 127 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Екатеринбурга</DetailsElement>
              <DetailsElement>от 9 275 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Челябинска</DetailsElement>
              <DetailsElement>от 9 148 ₽</DetailsElement>
            </ListElement>
          </FlightOriginsList>
        </Offer>

        <Offer>
          <DirectionDescription>
            <Flag>
              <FlagImage src={arm} alt="calendar" />
            </Flag>
            <Direction>
              <CityName>Ереван</CityName>
              <CountryName>АРМЕНИЯ</CountryName>
            </Direction>
          </DirectionDescription>
          <FlightOriginsList>
            <ListElement>
              <DetailsElement link>Из Москвы</DetailsElement>
              <DetailsElement>от 6 758 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Санкт-Петербурга</DetailsElement>
              <DetailsElement>от 9 932 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Сочи</DetailsElement>
              <DetailsElement>от 11 951 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Краснодара</DetailsElement>
              <DetailsElement>от 11 741 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Ростова-на-Дону</DetailsElement>
              <DetailsElement>от 11 956 ₽</DetailsElement>
            </ListElement>
          </FlightOriginsList>
        </Offer>

        <Offer last>
          <DirectionDescription>
            <Flag>
              <FlagImage src={mol} alt="calendar" />
            </Flag>
            <Direction>
              <CityName>Кишинёв</CityName>
              <CountryName>МОЛДАВИЯ</CountryName>
            </Direction>
          </DirectionDescription>
          <FlightOriginsList>
            <ListElement>
              <DetailsElement link>Из Москвы</DetailsElement>
              <DetailsElement>от 8 319 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Санкт-Петербурга</DetailsElement>
              <DetailsElement>от 10 800 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Краснодара</DetailsElement>
              <DetailsElement>от 12 098 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Сургута</DetailsElement>
              <DetailsElement>от 16 277 ₽</DetailsElement>
            </ListElement>
            <ListElement>
              <DetailsElement link>Из Нового Уренгоя</DetailsElement>
              <DetailsElement>от 15 987 ₽</DetailsElement>
            </ListElement>
          </FlightOriginsList>
        </Offer>
      </PopularCountries>
      <CheapTickets>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </CheapTickets>
      <OfferWarning>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </OfferWarning>
    </div>
  </Container>
);
