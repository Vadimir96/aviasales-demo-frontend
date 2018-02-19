import React from "react";
import vkicon from "./vkicon.svg";
import faceicon from "./faceicon.svg";
import insticon from "./insticon.svg";
import twiicon from "./twiicon.svg";
import vibicon from "./vibicon.svg";
import apple_logo_icon from "./Apple_Link_Logo.svg";
import google_logo_icon from "./Google_Link_Logo.svg";
import win_logo_icon from "./Win_Link_Logo.svg";

import {
  Container,
  Footer_top,
  Footer_top_block,
  Footer_top_block_name,
  Footer_top_block_element,
  Footer_top_block_extension,
  Footer_block,
  Footer_Content,
  Footer_Content_List,
  Footer_Content_List_Element,
  Footer_Content_Link,
  Footer_Content_Img,
  Footer_Content_Hotels,
  Footer_Content_Block_Buttons,
  Footer_Content_Link_Buttons_Block,
  Footer_Content_Link_Button,
  Footer_Content_Link_Button_Img,
  Footer_Content_Link_Button_Txt,
  Footer_Content_Link_Button_Txt_small,
  Footer_Content_Link_Button_Txt_bold,
  Footer_Content_Link_Buttons_Block_Inside,
  Footer_Content_end
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Footer_top>
        <Footer_top_block>
          <Footer_top_block_name>СТРАНЫ</Footer_top_block_name>
          <Footer_top_block_element>Россия</Footer_top_block_element>
          <Footer_top_block_element>Таиланд</Footer_top_block_element>
          <Footer_top_block_element>Черногория</Footer_top_block_element>
          <Footer_top_block_element>Кипр</Footer_top_block_element>
          <Footer_top_block_element>Болгария</Footer_top_block_element>
          <Footer_top_block_element>Грузия</Footer_top_block_element>
          <Footer_top_block_extension>Все страны →</Footer_top_block_extension>
        </Footer_top_block>
        <Footer_top_block>
          <Footer_top_block_name>ГОРОДА</Footer_top_block_name>
          <Footer_top_block_element>Москва</Footer_top_block_element>
          <Footer_top_block_element>Санкт-Петербург</Footer_top_block_element>
          <Footer_top_block_element>Симферополь</Footer_top_block_element>
          <Footer_top_block_element>Адлер</Footer_top_block_element>
          <Footer_top_block_element>Екатеринбург</Footer_top_block_element>
          <Footer_top_block_element>Лондон</Footer_top_block_element>
          <Footer_top_block_extension>Все города →</Footer_top_block_extension>
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
          <Footer_top_block_element>Карта низких цен</Footer_top_block_element>
          <Footer_top_block_element>Спецпредложения</Footer_top_block_element>
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
              <Footer_Content_Link>Партнёрская программа</Footer_Content_Link>
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
              <Footer_Content_Link>White Label авиабилеты</Footer_Content_Link>
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
        <Footer_Content_Block_Buttons>
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
        </Footer_Content_Block_Buttons>
      </Footer_block>
    </div>
  </Container>
);
