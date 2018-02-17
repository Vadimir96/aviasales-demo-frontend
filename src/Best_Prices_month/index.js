import React from "react";
import calendarprice from "./calendar-prices.svg";
import russ from "./rus.svg";
import arm from "./arm.svg";
import mol from "./mol.svg";

import {
  Container,
  PopularCountries,
  Offers,
  Calendar,
  Calendaricon,
  Calendarheader,
  Countryblock,
  Country_Prices,
  Flags,
  Flag,
  Country_Text,
  Town_Text,
  CountryText,
  FlightOrigins,
  ListElement,
  DetailsElement,
  MainText,
  LittleText
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Calendar>
        <Calendaricon src={calendarprice} alt="calendar" />
      </Calendar>
      <Calendarheader>
        Лучшие цены на авиабилеты за последний месяц
      </Calendarheader>
      <PopularCountries>
        <Offers>
          <Country_Prices>
            <Flag>
              <Flags src={russ} alt="calendar" />
            </Flag>
            <Country_Text>
              <Town_Text>Симферополь (Крым)</Town_Text>
              <CountryText>Крым</CountryText>
            </Country_Text>
          </Country_Prices>
          <FlightOrigins>
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
          </FlightOrigins>
        </Offers>

        <Offers>
          <Country_Prices>
            <Flag>
              <Flags src={arm} alt="calendar" />
            </Flag>
            <Country_Text>
              <Town_Text>Ереван</Town_Text>
              <CountryText>АРМЕНИЯ</CountryText>
            </Country_Text>
          </Country_Prices>
          <FlightOrigins>
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
          </FlightOrigins>
        </Offers>

        <Offers last>
          <Country_Prices>
            <Flag>
              <Flags src={mol} alt="calendar" />
            </Flag>
            <Country_Text>
              <Town_Text>Кишинёв</Town_Text>
              <CountryText>МОЛДАВИЯ</CountryText>
            </Country_Text>
          </Country_Prices>
          <FlightOrigins>
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
          </FlightOrigins>
        </Offers>
      </PopularCountries>
      <MainText>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
        авиакомпаний.
      </MainText>
      <LittleText>
        Цены, найденные пользователями за последние 48 часов, не являются
        офертой.
      </LittleText>
    </div>
  </Container>
);
