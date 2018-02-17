import React from "react";
import compass from "./Compass.svg";
import pencil from "./Pencil.svg";
import globe from "./Globe_shape.svg";
import tree from "./Palm_tree.svg";
import cart from "./Shopping_cart.svg";
import culture from "./Culture.svg";
import coctail from "./Coctail.svg";
import child from "./Child_car.svg";
import russ from "./rus.svg";
import bars from "./bars.svg";
import rect_pop from "./Rectangle2.svg";
import pop_bg_1 from "./backgroundImage-2.png";
import pop_bg_2 from "./backgroundImage-6.png";
import pop_bg_3 from "./backgroundImage-12.png";
import pop_bg_4 from "./backgroundImage-3.png";
import pop_bg_5 from "./backgroundImage-9.png";
import pop_bg_6 from "./Group 10.png";

import {
  Container,
  Compass,
  PD_title,
  City_name,
  CityChoice,
  DirectionType,
  DirectionTypeUnit,
  DirectionTypeCard,
  FondCompass,
  DirectionTypeImg,
  DirectionTypeText,
  Underline,
  Cardholder,
  Card,
  PopCityImg,
  PopDirectionFlag,
  PopDirectionImage,
  PopDirectionCountry,
  PopCityName,
  PopCityCountry,
  PopCityPrice,
  PopCityDate,
  PopDirectionBlock,
  PopInfoBlock,
  PopDirectionFooter
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <FondCompass>
        <Compass src={compass} alt="logo" />
      </FondCompass>
      <PD_title>
        Популярные направления перелетов из города<City_name>
          Москва <CityChoice src={pencil} alt="logo" />
        </City_name>
      </PD_title>
      <DirectionType>
        <DirectionTypeUnit>
          <DirectionTypeCard chosen>
            <DirectionTypeImg src={globe} alt="logo" />
            <DirectionTypeText chosen>КУДА УГОДНО</DirectionTypeText>
            <Underline src={rect_pop} alt="logo" />
          </DirectionTypeCard>
        </DirectionTypeUnit>
        <DirectionTypeUnit>
          <DirectionTypeCard>
            <DirectionTypeImg src={tree} alt="logo" />
            <DirectionTypeText>СОЛНЦЕ И МОРЕ</DirectionTypeText>
          </DirectionTypeCard>
        </DirectionTypeUnit>
        <DirectionTypeUnit>
          <DirectionTypeCard>
            <DirectionTypeImg src={cart} alt="logo" />
            <DirectionTypeText>ШОПИНГ, ГОРОД</DirectionTypeText>
          </DirectionTypeCard>
        </DirectionTypeUnit>
        <DirectionTypeUnit>
          <DirectionTypeCard>
            <DirectionTypeImg src={culture} alt="logo" />
            <DirectionTypeText>КУЛЬТУРА И&nbsp;ИСТОРИЯ</DirectionTypeText>
          </DirectionTypeCard>
        </DirectionTypeUnit>
        <DirectionTypeUnit>
          <DirectionTypeCard>
            <DirectionTypeImg src={coctail} alt="logo" />
            <DirectionTypeText>НОЧНАЯ ЖИЗНЬ</DirectionTypeText>
          </DirectionTypeCard>
        </DirectionTypeUnit>
        <DirectionTypeUnit>
          <DirectionTypeCard>
            <DirectionTypeImg src={child} alt="logo" />
            <DirectionTypeText>ОТДЫХ С ДЕТЬМИ</DirectionTypeText>
          </DirectionTypeCard>
        </DirectionTypeUnit>
      </DirectionType>
      <Cardholder>
        <Card card>
          <PopCityImg src={pop_bg_1} alt="logo" />
          <PopDirectionFooter>
            <PopDirectionBlock>
              <PopDirectionFlag>
                <PopDirectionImage src={russ} />
              </PopDirectionFlag>
              <PopDirectionCountry>
                <PopCityName>Краснодар</PopCityName>
                <PopCityCountry>РОССИЯ</PopCityCountry>
              </PopDirectionCountry>
            </PopDirectionBlock>
            <PopInfoBlock>
              <PopCityPrice>Найти от 1 212Р</PopCityPrice>
              <PopCityDate>18 марта</PopCityDate>
            </PopInfoBlock>
          </PopDirectionFooter>
        </Card>
        <Card>
          <PopCityImg src={pop_bg_2} alt="logo" />
          <PopDirectionFooter>
            <PopDirectionBlock>
              <PopDirectionFlag>
                <PopDirectionImage src={russ} />
              </PopDirectionFlag>
              <PopDirectionCountry>
                <PopCityName>Сочи (Адлер)</PopCityName>
                <PopCityCountry>РОССИЯ</PopCityCountry>
              </PopDirectionCountry>
            </PopDirectionBlock>
            <PopInfoBlock>
              <PopCityPrice>Найти от 1 334Р</PopCityPrice>
              <PopCityDate>27 марта</PopCityDate>
            </PopInfoBlock>
          </PopDirectionFooter>
        </Card>
        <Card card>
          <PopCityImg src={pop_bg_3} alt="logo" />
          <PopDirectionFooter>
            <PopDirectionBlock>
              <PopDirectionFlag>
                <PopDirectionImage src={russ} />
              </PopDirectionFlag>
              <PopDirectionCountry>
                <PopCityName>Санкт-Петербург</PopCityName>
                <PopCityCountry>РОССИЯ</PopCityCountry>
              </PopDirectionCountry>
            </PopDirectionBlock>
            <PopInfoBlock>
              <PopCityPrice>Найти от 1 508Р</PopCityPrice>
              <PopCityDate>19 февраля</PopCityDate>
            </PopInfoBlock>
          </PopDirectionFooter>
        </Card>
        <Card>
          <PopCityImg src={pop_bg_4} alt="logo" />
          <PopDirectionFooter>
            <PopDirectionBlock>
              <PopDirectionFlag>
                <PopDirectionImage src={russ} />
              </PopDirectionFlag>
              <PopDirectionCountry>
                <PopCityName>Минеральные Воды</PopCityName>
                <PopCityCountry>РОССИЯ</PopCityCountry>
              </PopDirectionCountry>
            </PopDirectionBlock>
            <PopInfoBlock>
              <PopCityPrice>Найти от 2 074Р</PopCityPrice>
              <PopCityDate>13 марта</PopCityDate>
            </PopInfoBlock>
          </PopDirectionFooter>
        </Card>
        <Card card>
          <PopCityImg src={pop_bg_5} alt="logo" />
          <PopDirectionFooter>
            <PopDirectionBlock>
              <PopDirectionFlag>
                <PopDirectionImage src={russ} />
              </PopDirectionFlag>
              <PopDirectionCountry>
                <PopCityName>Симферополь (Крым)</PopCityName>
                <PopCityCountry>КРЫМ</PopCityCountry>
              </PopDirectionCountry>
            </PopDirectionBlock>
            <PopInfoBlock>
              <PopCityPrice>Найти от 2 407Р</PopCityPrice>
              <PopCityDate>13 марта</PopCityDate>
            </PopInfoBlock>
          </PopDirectionFooter>
        </Card>
        <Card>
          <PopCityImg src={pop_bg_6} alt="logo" />
          <PopDirectionFooter>
            <PopDirectionBlock>
              <PopDirectionFlag>
                <PopDirectionImage src={bars} />
              </PopDirectionFlag>
              <PopDirectionCountry>
                <PopCityName>Барселона</PopCityName>
                <PopCityCountry>ИСПАНИЯ</PopCityCountry>
              </PopDirectionCountry>
            </PopDirectionBlock>
            <PopInfoBlock>
              <PopCityPrice>Найти от 4 247Р</PopCityPrice>
              <PopCityDate>24 марта</PopCityDate>
            </PopInfoBlock>
          </PopDirectionFooter>
        </Card>
      </Cardholder>
    </div>
  </Container>
);
