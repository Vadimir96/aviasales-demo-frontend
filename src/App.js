import React, { Component } from "react";
import "flexboxgrid2";
import styled from "styled-components";

import plane from "./images/aero-2.svg";
import calendarprice from "./images/calendar-prices.svg";
import russ from "./images/rus.svg";
import arm from "./images/arm.svg";
import mol from "./images/mol.svg";

import compass from "./images/Compass.svg";
import pencil from "./images/Pencil.svg";
import globe from "./images/Globe_shape.svg";
import tree from "./images/Palm_tree.svg";
import cart from "./images/Shopping_cart.svg";
import culture from "./images/Culture.svg";
import coctail from "./images/Coctail.svg";
import child from "./images/Child_car.svg";
import bars from "./images/bars.svg";
import rect_pop from "./images/Rectangle2.svg";
import pop_bg_1 from "./images/backgroundImage-2.png";
import pop_bg_2 from "./images/backgroundImage-6.png";
import pop_bg_3 from "./images/backgroundImage-12.png";
import pop_bg_4 from "./images/backgroundImage-3.png";
import pop_bg_5 from "./images/backgroundImage-9.png";
import pop_bg_6 from "./images/Group 10.png";

import SlideFirm1 from "./images/SlideFirm1.svg";
import SlideFirm2 from "./images/SlideFirm2.svg";
import SlideFirm3 from "./images/SlideFirm3.svg";
import SlideFirm4 from "./images/SlideFirm4.svg";
import SlideFirm5 from "./images/SlideFirm5.svg";
import LeftSlide from "./images/LeftSlide.svg";
import RightSlide from "./images/RightSlide.svg";

import twitdispatch from "./images/twitdispatch.svg";
import facedispatch from "./images/facedispatch.svg";
import vkdispatch from "./images/vkdispatch.svg";
import invdispatch from "./images/invdispatch.svg";

import icoplane from "./images/icoplane.svg";
import icoemail from "./images/icoemail.svg";
import icool from "./images/icool.svg";

import pobeda from "./images/img-2.png";
import lufthansa from "./images/img.png";
import lufthansa_logo from "./images/img-1.png";

import phone from "./images/Phone.svg";
import phoneSmall from "./images/phone320.png";
import phoneMedium from "./images/phone768.png";
import phoneLarge from "./images/phone1440.png";
import star from "./images/star.svg";
import appleico from "./images/appleicon.svg";
import androidico from "./images/androidicon.svg";
import winico from "./images/winicon.svg";

import vkicon from "./images/vkicon.svg";
import faceicon from "./images/faceicon.svg";
import insticon from "./images/insticon.svg";
import twiicon from "./images/twiicon.svg";
import vibicon from "./images/vibicon.svg";
import apple_logo_icon from "./images/Apple_Link_Logo.svg";
import google_logo_icon from "./images/Google_Link_Logo.svg";
import win_logo_icon from "./images/Win_Link_Logo.svg";

import {
  Aviasales,
  Bg,
  LogoLink,
  Logo,
  Text,
  Date,
  Form_block,
  Info_block,
  Formgroup,
  FormCountry,
  FormDate,
  FormTickt,
  Textfield,
  Сountrytype,
  Swaparrows,
  Passangerinfo,
  Calendar_block,
  Ticketstype,
  Flightbutton
} from "./Top.js";

import {
  Pop_dir,
  Compass,
  PD_title,
  City_name,
  Pencil,
  List,
  List_unit,
  List_div,
  FondCompass,
  List_img,
  List_text,
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
} from "./Popular-directions.js";

import {
  Best_Prices,
  Card_Best_Prices,
  Calendar_Prices,
  Calendaricon,
  Calendarheader,
  Countryblock,
  Country_Prices,
  Countryimages,
  Countryimage,
  Country_Text,
  Town_Text,
  CountryText,
  List_Country,
  ElementList,
  DetailsElement,
  MainText,
  LittleText
} from "./Best_Prices_month.js";

import {
  AirlinesMain,
  AirlinesBlock,
  AirlinesHeader,
  AirlinesBlockContent,
  AirlinesSlideOne,
  AirlinesSlideNav,
  AirlinesSlideNavOl,
  AirlinesSlideDirection,
  AirlinesSlideLogotypes
} from "./Cheap_Airlines.js";

import {
  MainDispatch,
  DispatchBlock,
  DispatchTextBlock,
  DispatchHeader,
  DispatchTextwishes,
  DispatchList,
  DispatchListSocial,
  DispatchListSocialLink,
  DispatchListSocialLinkImg,
  DispatchSendBlock,
  DispatchField,
  DispatchForm,
  DispatchFormButton
} from "./Dispatch.js";

import {
  Sp_off,
  Sp_off_h_text,
  Sp_off_cardholder,
  Sp_off_card,
  Sp_off_card_header,
  Sp_off_card_head_text,
  Sp_off_card_header_pic,
  Sp_off_card_filler,
  Sp_off_card_filler_top,
  Sp_off_card_filler_top_text,
  Sp_off_card_pic,
  Sp_off_card_prefix,
  Sp_off_card_price,
  Sp_off_card_exp_date,
  Sp_off_card_desc,
  Sp_off_card_button,
  Sp_off_text_below,
  Sp_off_link_below,
  Sp_off_text_below_starred
} from "./Special_offer.js";

import {
  Paragraph_block,
  Paragraph_Text,
  Paragraph_Card,
  Paragraph_Head,
  Paragraph_Icon,
  Paragraph_Description,
  Paragraph_Link
} from "./Customer_info.js";

import {
  Application_block,
  ApplicationInd,
  ApplicationPhone,
  ApplicationRating,
  ApplicatioText,
  ApplicationContent,
  ApplicationList,
  AppListEl,
  ApplicationLink,
  ApplicationIcon,
  RatingText
} from "./Application.js";

import {
  Footer,
  Footer_top,
  Footer_top_block,
  Footer_top_block_name,
  Footer_top_block_element,
  Footer_top_block_extension
} from "./Footer.js";

import {
  Footer_block,
  Footer_Content,
  Footer_Content_List,
  Footer_Content_List_Element,
  Footer_Content_Link,
  Footer_Content_Img,
  Footer_Content_Hotels,
  Footer_Content_Link_Buttons_Block,
  Footer_Content_Link_Button,
  Footer_Content_Link_Button_Img,
  Footer_Content_Link_Button_Txt,
  Footer_Content_Link_Button_Txt_small,
  Footer_Content_Link_Button_Txt_bold,
  Footer_Content_Link_Buttons_Block_Inside,
  Footer_Content_end
} from "./Footer_Content.js";

class App extends Component {
  render() {
    return (
      <Aviasales>
        <Bg>
          <LogoLink>
            <Logo>aviasales</Logo>
          </LogoLink>
          <Text>Поиск дешевых авиабилетов</Text>
          <Form_block>
            <Info_block>
              <FormCountry city>
                <Textfield top placeholder="Город отправления" />
                <Сountrytype>MOW</Сountrytype>
                <Swaparrows />
              </FormCountry>
              <Formgroup city>
                <Textfield placeholder="Город прибытия" />
              </Formgroup>
              <Date>
                <FormDate date>
                  <Calendar_block />
                  <Textfield placeholder="Туда" />
                </FormDate>
                <FormDate>
                  <Calendar_block />
                  <Textfield placeholder="Обратно" calendar />
                </FormDate>
              </Date>
              <FormTickt city>
                <Passangerinfo>
                  1 пассажир,
                  <Ticketstype> эконом</Ticketstype>
                </Passangerinfo>
              </FormTickt>
              <Formgroup city center>
                <Flightbutton>Найти билеты</Flightbutton>
              </Formgroup>
            </Info_block>
          </Form_block>
        </Bg>
        <Pop_dir>
          <FondCompass>
            <Compass src={compass} alt="logo" />
          </FondCompass>
          <PD_title>
            Популярные направления перелетов из города<City_name>
              Москва <Pencil src={pencil} alt="logo" />
            </City_name>
          </PD_title>
          <List>
            <List_unit>
              <List_div chosen>
                <List_img src={globe} alt="logo" />
                <List_text chosen>КУДА УГОДНО</List_text>
                <Underline src={rect_pop} alt="logo" />
              </List_div>
            </List_unit>
            <List_unit>
              <List_div>
                <List_img src={tree} alt="logo" />
                <List_text>СОЛНЦЕ И МОРЕ</List_text>
              </List_div>
            </List_unit>
            <List_unit>
              <List_div>
                <List_img src={cart} alt="logo" />
                <List_text>ШОПИНГ, ГОРОД</List_text>
              </List_div>
            </List_unit>
            <List_unit>
              <List_div>
                <List_img src={culture} alt="logo" />
                <List_text>КУЛЬТУРА И&nbsp;ИСТОРИЯ</List_text>
              </List_div>
            </List_unit>
            <List_unit>
              <List_div>
                <List_img src={coctail} alt="logo" />
                <List_text>НОЧНАЯ ЖИЗНЬ</List_text>
              </List_div>
            </List_unit>
            <List_unit>
              <List_div>
                <List_img src={child} alt="logo" />
                <List_text>ОТДЫХ С ДЕТЬМИ</List_text>
              </List_div>
            </List_unit>
          </List>
          <Cardholder>
            <Card>
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
            <Card>
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
            <Card>
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
        </Pop_dir>
        <Best_Prices>
          <Calendar_Prices>
            <Calendaricon src={calendarprice} alt="calendar" />
          </Calendar_Prices>
          <Calendarheader>
            Лучшие цены на авиабилеты за последний месяц
          </Calendarheader>
          <Card_Best_Prices>
            <Country_Prices>
              <Countryimage>
                <Countryimages src={russ} alt="calendar" />
              </Countryimage>
              <Country_Text>
                <Town_Text>Симферополь (Крым)</Town_Text>
                <CountryText>Крым</CountryText>
              </Country_Text>
            </Country_Prices>
            <List_Country>
              <ElementList>
                <DetailsElement link>Из Москвы</DetailsElement>
                <DetailsElement>от 4 813 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Санкт-Петербурга</DetailsElement>
                <DetailsElement>от 7 857 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Новосибирска</DetailsElement>
                <DetailsElement>от 15 127 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Екатеринбурга</DetailsElement>
                <DetailsElement>от 9 275 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Челябинска</DetailsElement>
                <DetailsElement>от 9 148 ₽</DetailsElement>
              </ElementList>
            </List_Country>
          </Card_Best_Prices>

          <Card_Best_Prices>
            <Country_Prices>
              <Countryimage>
                <Countryimages src={arm} alt="calendar" />
              </Countryimage>
              <Country_Text>
                <Town_Text>Ереван</Town_Text>
                <CountryText>АРМЕНИЯ</CountryText>
              </Country_Text>
            </Country_Prices>
            <List_Country>
              <ElementList>
                <DetailsElement link>Из Москвы</DetailsElement>
                <DetailsElement>от 6 758 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Санкт-Петербурга</DetailsElement>
                <DetailsElement>от 9 932 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Сочи</DetailsElement>
                <DetailsElement>от 11 951 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Краснодара</DetailsElement>
                <DetailsElement>от 11 741 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Ростова-на-Дону</DetailsElement>
                <DetailsElement>от 11 956 ₽</DetailsElement>
              </ElementList>
            </List_Country>
          </Card_Best_Prices>

          <Card_Best_Prices last>
            <Country_Prices>
              <Countryimage>
                <Countryimages src={mol} alt="calendar" />
              </Countryimage>
              <Country_Text>
                <Town_Text>Кишинёв</Town_Text>
                <CountryText>МОЛДАВИЯ</CountryText>
              </Country_Text>
            </Country_Prices>
            <List_Country>
              <ElementList>
                <DetailsElement link>Из Москвы</DetailsElement>
                <DetailsElement>от 8 319 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Санкт-Петербурга</DetailsElement>
                <DetailsElement>от 10 800 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Краснодара</DetailsElement>
                <DetailsElement>от 12 098 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Сургута</DetailsElement>
                <DetailsElement>от 16 277 ₽</DetailsElement>
              </ElementList>
              <ElementList>
                <DetailsElement link>Из Нового Уренгоя</DetailsElement>
                <DetailsElement>от 15 987 ₽</DetailsElement>
              </ElementList>
            </List_Country>
          </Card_Best_Prices>
          <MainText>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </MainText>
          <LittleText>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </LittleText>
        </Best_Prices>

        <AirlinesMain>
          <AirlinesBlock>
            <AirlinesSlideDirection src={LeftSlide} alt="left" direction />
            <AirlinesHeader>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </AirlinesHeader>
            <AirlinesSlideDirection src={RightSlide} alt="right" />
            <AirlinesBlockContent>
              <AirlinesSlideOne>
                <AirlinesSlideLogotypes src={SlideFirm1} alt="SlideFirm" />
                <AirlinesSlideLogotypes src={SlideFirm2} alt="SlideFirm" />
                <AirlinesSlideLogotypes src={SlideFirm3} alt="SlideFirm" />
                <AirlinesSlideLogotypes src={SlideFirm4} alt="SlideFirm" />
                <AirlinesSlideLogotypes src={SlideFirm5} alt="SlideFirm" />
              </AirlinesSlideOne>
              <AirlinesSlideNav>
                <AirlinesSlideNavOl active />
                <AirlinesSlideNavOl />
                <AirlinesSlideNavOl />
              </AirlinesSlideNav>
            </AirlinesBlockContent>
          </AirlinesBlock>
        </AirlinesMain>

        <MainDispatch>
          <DispatchBlock>
            <DispatchTextBlock>
              <DispatchHeader>
                Хотите знать всё о скидках на авиабилеты?
              </DispatchHeader>
              <DispatchTextwishes>
                Вы можете подписаться на нашу рассылку через соцсети или по
                электронной почте.
              </DispatchTextwishes>
            </DispatchTextBlock>
            <DispatchList>
              <DispatchListSocial>
                <DispatchListSocialLink>
                  <DispatchListSocialLinkImg src={twitdispatch} />
                </DispatchListSocialLink>
              </DispatchListSocial>
              <DispatchListSocial>
                <DispatchListSocialLink>
                  <DispatchListSocialLinkImg src={facedispatch} />
                </DispatchListSocialLink>
              </DispatchListSocial>
              <DispatchListSocial>
                <DispatchListSocialLink>
                  <DispatchListSocialLinkImg src={vkdispatch} />
                </DispatchListSocialLink>
              </DispatchListSocial>
              <DispatchListSocial>
                <DispatchListSocialLink>
                  <DispatchListSocialLinkImg src={invdispatch} />
                </DispatchListSocialLink>
              </DispatchListSocial>
            </DispatchList>
            <DispatchSendBlock>
              <DispatchForm>
                <DispatchField placeholder="Ваш email" />
                <DispatchFormButton>Подписаться</DispatchFormButton>
              </DispatchForm>
            </DispatchSendBlock>
          </DispatchBlock>
        </MainDispatch>

        <Sp_off>
          <Sp_off_h_text>Спецпредложения на&nbsp;авиабилеты</Sp_off_h_text>
          <Sp_off_cardholder>
            <Sp_off_card>
              <Sp_off_card_header>
                <Sp_off_card_head_text>
                  Билеты от 499 рублей!
                </Sp_off_card_head_text>
              </Sp_off_card_header>
              <Sp_off_card_filler>
                <Sp_off_card_filler_top>
                  <Sp_off_card_pic src={pobeda} alt="logo" />
                  <Sp_off_card_filler_top_text>
                    <Sp_off_card_prefix>
                      от&nbsp;
                      <Sp_off_card_price>499 ₽</Sp_off_card_price>
                    </Sp_off_card_prefix>
                    <Sp_off_card_exp_date>
                      Осталось 45 дней
                    </Sp_off_card_exp_date>
                  </Sp_off_card_filler_top_text>
                </Sp_off_card_filler_top>
                <Sp_off_card_desc>
                  Билеты от 499 рублей!<br />Специальное предложение от
                  авиакомпании<br />Победа
                </Sp_off_card_desc>
                <Sp_off_card_button>Узнать подробности</Sp_off_card_button>
              </Sp_off_card_filler>
            </Sp_off_card>
            <Sp_off_card>
              <Sp_off_card_header>
                <Sp_off_card_head_text>
                  В Нью-Йорк от 20 680 ₽
                </Sp_off_card_head_text>
                <Sp_off_card_header_pic src={lufthansa_logo} alt="logo" />
              </Sp_off_card_header>
              <Sp_off_card_filler>
                <Sp_off_card_filler_top>
                  <Sp_off_card_pic src={lufthansa} alt="logo" />
                  <Sp_off_card_filler_top_text>
                    <Sp_off_card_prefix>
                      от&nbsp;
                      <Sp_off_card_price>20 680 ₽</Sp_off_card_price>
                    </Sp_off_card_prefix>
                    <Sp_off_card_exp_date>
                      Осталось 19 дней
                    </Sp_off_card_exp_date>
                  </Sp_off_card_filler_top_text>
                </Sp_off_card_filler_top>
                <Sp_off_card_desc>
                  Из Москвы в США от 20680 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Sp_off_card_desc>
                <Sp_off_card_button>Узнать подробности</Sp_off_card_button>
              </Sp_off_card_filler>
            </Sp_off_card>
            <Sp_off_card>
              <Sp_off_card_header>
                <Sp_off_card_head_text>
                  В Лос-Анджелес от…
                </Sp_off_card_head_text>
                <Sp_off_card_header_pic src={lufthansa_logo} alt="logo" />
              </Sp_off_card_header>
              <Sp_off_card_filler>
                <Sp_off_card_filler_top>
                  <Sp_off_card_pic src={lufthansa} alt="logo" />
                  <Sp_off_card_filler_top_text>
                    <Sp_off_card_prefix>
                      от&nbsp;
                      <Sp_off_card_price>20 360 ₽</Sp_off_card_price>
                    </Sp_off_card_prefix>
                    <Sp_off_card_exp_date>
                      Осталось 19 дней
                    </Sp_off_card_exp_date>
                  </Sp_off_card_filler_top_text>
                </Sp_off_card_filler_top>
                <Sp_off_card_desc>
                  Из Москвы в США от 22360 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Sp_off_card_desc>
                <Sp_off_card_button>Узнать подробности</Sp_off_card_button>
              </Sp_off_card_filler>
            </Sp_off_card>
          </Sp_off_cardholder>
          <Sp_off_text_below>
            <Sp_off_link_below>Смотреть все спецпредложения</Sp_off_link_below>
            <Sp_off_text_below_starred>
              * средняя цена по направлению
            </Sp_off_text_below_starred>
          </Sp_off_text_below>
        </Sp_off>
        <Paragraph_block>
          <Paragraph_Text>
            <Paragraph_Card>
              <Paragraph_Head>
                <Paragraph_Icon src={icoplane} alt="plane" />
                КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?
              </Paragraph_Head>
              <Paragraph_Description>
                Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
                самолет по сотням авиакомпаний и находим за считанные минуты
                самые дешевые авиабилеты. Чтобы купить авиабилет дешево,
                воспользуйтесь нашим поиском, который совершенно бесплатно
                сравнивает цены на авиабилеты онлайн и находит самые дешевые
                перелеты. Больше нет смысла ходить в авиакассы, обзванивать
                агентства — дешевый билет находится на расстоянии клика. На
                нашем сайте вы можете подобрать дешевые билеты на самолет в
                Европу, Азию и на другие континенты. Мы написали для вас простую
                инструкцию о том, как пользоваться поиском и экономить на
                перелетах от 1000 до 20 000 руб в год.
                <Paragraph_Link> Подробнее</Paragraph_Link>
              </Paragraph_Description>
            </Paragraph_Card>

            <Paragraph_Card>
              <Paragraph_Head>
                <Paragraph_Icon src={icoemail} alt="email" />
                ЭЛЕКТРОННЫЙ АВИАБИЛЕТ
              </Paragraph_Head>
              <Paragraph_Description>
                Электронный авиабилет — это, по сути, обычный билет на самолет,
                но только в менее привычном для путешественника виде. Вся
                информация об авиаперелете (данные пассажира, маршрут
                следования) хранится в электронной базе, а пассажир получает на
                руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет
                онлайн и получив маршрут-квитанцию, удивлены ее видом — это
                обыкновенный лист формата А4, на котором распечатана вся
                информация о предстоящем перелете. Однако это действительно
                официальный документ, подтверждающий договор между
                авиаперевозчиком и пассажиром. При регистрации на рейс пассажир
                должен предъявить маршрут-квитанцию вместе с удостоверением
                личности точно так же, как предъявляют обыкновенный бумажный
                билет. Следует отметить, что электронный билет, приобретенный
                онлайн, стоит дешевле своего бумажного аналога.
                <Paragraph_Link> Подробнее</Paragraph_Link>
              </Paragraph_Description>
            </Paragraph_Card>

            <Paragraph_Card>
              <Paragraph_Head>
                <Paragraph_Icon src={icool} alt="ol" />
                20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ
              </Paragraph_Head>
              <Paragraph_Description>
                Есть масса путеводителей по странам, но ни одного о том, как
                провести время в самолете. Для того, чтобы сделать ваш перелет
                максимально комфортным, мы написали 20 советов о подготовке к
                путешествию. Ведь настоящее путешествие начинается со слов
                «Добро пожаловать на борт нашего самолета»!
                <Paragraph_Link> Подробнее</Paragraph_Link>
              </Paragraph_Description>
            </Paragraph_Card>
          </Paragraph_Text>
        </Paragraph_block>
        <Application_block>
          <ApplicationInd>
            <ApplicationContent>
              <ApplicatioText>
                Скачай мобильное приложение Aviasales.ru
              </ApplicatioText>
              <RatingText>
                <ApplicationRating src={star} alt="star" />
                Более 103 000 оценок
              </RatingText>
              <ApplicationList>
                <AppListEl>
                  <ApplicationLink>
                    <ApplicationIcon src={appleico} alt="apple" />
                    iPhone или iPad
                  </ApplicationLink>
                </AppListEl>
                <AppListEl>
                  <ApplicationLink>
                    <ApplicationIcon src={androidico} alt="android" />
                    Android
                  </ApplicationLink>
                </AppListEl>
                <AppListEl>
                  <ApplicationLink>
                    <ApplicationIcon src={winico} alt="win" />
                    Windows Phone
                  </ApplicationLink>
                </AppListEl>
              </ApplicationList>
            </ApplicationContent>
          </ApplicationInd>
        </Application_block>
        <Footer>
          <Footer_top>
            <Footer_top_block>
              <Footer_top_block_name>СТРАНЫ</Footer_top_block_name>
              <Footer_top_block_element>Россия</Footer_top_block_element>
              <Footer_top_block_element>Таиланд</Footer_top_block_element>
              <Footer_top_block_element>Черногория</Footer_top_block_element>
              <Footer_top_block_element>Кипр</Footer_top_block_element>
              <Footer_top_block_element>Болгария</Footer_top_block_element>
              <Footer_top_block_element>Грузия</Footer_top_block_element>
              <Footer_top_block_extension>
                Все страны →
              </Footer_top_block_extension>
            </Footer_top_block>
            <Footer_top_block>
              <Footer_top_block_name>ГОРОДА</Footer_top_block_name>
              <Footer_top_block_element>Москва</Footer_top_block_element>
              <Footer_top_block_element>
                Санкт-Петербург
              </Footer_top_block_element>
              <Footer_top_block_element>Симферополь</Footer_top_block_element>
              <Footer_top_block_element>Адлер</Footer_top_block_element>
              <Footer_top_block_element>Екатеринбург</Footer_top_block_element>
              <Footer_top_block_element>Лондон</Footer_top_block_element>
              <Footer_top_block_extension>
                Все города →
              </Footer_top_block_extension>
            </Footer_top_block>
            <Footer_top_block>
              <Footer_top_block_name>АВИАКОМПАНИИ</Footer_top_block_name>
              <Footer_top_block_element>Air Berlin</Footer_top_block_element>
              <Footer_top_block_element>Air France</Footer_top_block_element>
              <Footer_top_block_element>Alitalia</Footer_top_block_element>
              <Footer_top_block_element>Air Baltic</Footer_top_block_element>
              <Footer_top_block_element>Emirates</Footer_top_block_element>
              <Footer_top_block_element>KLM</Footer_top_block_element>
              <Footer_top_block_extension>
                Все авиакомпании →
              </Footer_top_block_extension>
            </Footer_top_block>
            <Footer_top_block>
              <Footer_top_block_name>АЭРОПОРТЫ</Footer_top_block_name>
              <Footer_top_block_element>Шереметьево</Footer_top_block_element>
              <Footer_top_block_element>Курумоч</Footer_top_block_element>
              <Footer_top_block_element>Домодедово</Footer_top_block_element>
              <Footer_top_block_element>Толмачево</Footer_top_block_element>
              <Footer_top_block_element>Владивосток</Footer_top_block_element>
              <Footer_top_block_element>Гамбург</Footer_top_block_element>
              <Footer_top_block_extension>
                Все аэропорты →
              </Footer_top_block_extension>
            </Footer_top_block>
            <Footer_top_block>
              <Footer_top_block_name>НАПРАВЛЕНИЯ</Footer_top_block_name>
              <Footer_top_block_element>MOW – SIP</Footer_top_block_element>
              <Footer_top_block_element>MOW – AER</Footer_top_block_element>
              <Footer_top_block_element>MOW – TIV</Footer_top_block_element>
              <Footer_top_block_element>MOW – MRV</Footer_top_block_element>
              <Footer_top_block_element>LED – MOW</Footer_top_block_element>
              <Footer_top_block_element>MOW – BKK</Footer_top_block_element>
            </Footer_top_block>
            <Footer_top_block>
              <Footer_top_block_name>СЕРВИСЫ</Footer_top_block_name>
              <Footer_top_block_element>
                Горящие авиабилеты
              </Footer_top_block_element>
              <Footer_top_block_element>
                Календарь низких цен
              </Footer_top_block_element>
              <Footer_top_block_element>
                Карта низких цен
              </Footer_top_block_element>
              <Footer_top_block_element>
                Спецпредложения
              </Footer_top_block_element>
              <Footer_top_block_element>Таблица цен</Footer_top_block_element>
              <Footer_top_block_element>Блог</Footer_top_block_element>
              <Footer_top_block_element>Помощь</Footer_top_block_element>
            </Footer_top_block>
          </Footer_top>

          <Footer_block>
            <Footer_Content>
              <Footer_Content_List links>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>О компании </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>
                    Партнёрская программа
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>Реклама </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>Вакансии</Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>Помощь</Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>Правила</Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element>
                  <Footer_Content_Link>
                    White Label авиабилеты
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
              </Footer_Content_List>
              <Footer_Content_List>
                <Footer_Content_List_Element social>
                  <Footer_Content_Link>
                    <Footer_Content_Img src={vkicon} alt="vk" />
                    Вконтакте
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element social>
                  <Footer_Content_Link>
                    <Footer_Content_Img src={faceicon} alt="faceicon" />
                    Фейсбук
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element social>
                  <Footer_Content_Link>
                    <Footer_Content_Img src={insticon} alt="insticon" />
                    Инстаграм
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element social>
                  <Footer_Content_Link>
                    <Footer_Content_Img src={twiicon} alt="twiicon" />
                    Твиттер
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element social>
                  <Footer_Content_Link>
                    <Footer_Content_Img src={vibicon} alt="vibicon" />
                    Вайбер
                  </Footer_Content_Link>
                </Footer_Content_List_Element>
                <Footer_Content_List_Element social>
                  <Footer_Content_Link />
                </Footer_Content_List_Element>
              </Footer_Content_List>
              <Footer_Content_Hotels>
                <Footer_Content_Link>
                  Поиск и бронирование отелей
                </Footer_Content_Link>
              </Footer_Content_Hotels>
            </Footer_Content>
            <Footer_Content_Link_Buttons_Block>
              <Footer_Content_Link_Button>
                <Footer_Content_Link_Buttons_Block_Inside>
                  <Footer_Content_Link_Button_Img
                    src={apple_logo_icon}
                    alt="Apple-logo"
                  />
                  <Footer_Content_Link_Button_Txt>
                    <Footer_Content_Link_Button_Txt_small>
                      Скачайте в
                    </Footer_Content_Link_Button_Txt_small>
                    <Footer_Content_Link_Button_Txt_bold>
                      App Store
                    </Footer_Content_Link_Button_Txt_bold>
                  </Footer_Content_Link_Button_Txt>
                </Footer_Content_Link_Buttons_Block_Inside>
              </Footer_Content_Link_Button>
              <Footer_Content_Link_Button>
                <Footer_Content_Link_Buttons_Block_Inside play>
                  <Footer_Content_Link_Button_Img
                    src={google_logo_icon}
                    alt="Apple-logo"
                  />
                  <Footer_Content_Link_Button_Txt>
                    <Footer_Content_Link_Button_Txt_small>
                      Скачайте в
                    </Footer_Content_Link_Button_Txt_small>
                    <Footer_Content_Link_Button_Txt_bold>
                      Google Play
                    </Footer_Content_Link_Button_Txt_bold>
                  </Footer_Content_Link_Button_Txt>
                </Footer_Content_Link_Buttons_Block_Inside>
              </Footer_Content_Link_Button>
              <Footer_Content_Link_Button>
                <Footer_Content_Link_Buttons_Block_Inside win>
                  <Footer_Content_Link_Button_Img
                    src={win_logo_icon}
                    alt="Apple-logo"
                  />
                  <Footer_Content_Link_Button_Txt>
                    <Footer_Content_Link_Button_Txt_bold>
                      Windows<br />Phone
                    </Footer_Content_Link_Button_Txt_bold>
                  </Footer_Content_Link_Button_Txt>
                </Footer_Content_Link_Buttons_Block_Inside>
              </Footer_Content_Link_Button>
            </Footer_Content_Link_Buttons_Block>
            <Footer_Content_end>
              © 2007–2018, Aviasales — дешевые авиабилеты
            </Footer_Content_end>
          </Footer_block>
        </Footer>
      </Aviasales>
    );
  }
}

export default App;
