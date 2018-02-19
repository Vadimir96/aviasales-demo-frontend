import React from "react";
import pobeda from "./img-2.png";
import lufthansa from "./img.png";
import lufthansa_logo from "./img-1.png";

import {
  Container,
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
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Sp_off_h_text>Спецпредложения на&nbsp;авиабилеты</Sp_off_h_text>
      <Sp_off_cardholder>
        <Sp_off_card>
          <Sp_off_card_header>
            <Sp_off_card_head_text>Билеты от 499 рублей!</Sp_off_card_head_text>
          </Sp_off_card_header>
          <Sp_off_card_filler>
            <Sp_off_card_filler_top>
              <Sp_off_card_pic src={pobeda} alt="logo" />
              <Sp_off_card_filler_top_text>
                <Sp_off_card_prefix>
                  от&nbsp;
                  <Sp_off_card_price>499 ₽</Sp_off_card_price>
                </Sp_off_card_prefix>
                <Sp_off_card_exp_date>Осталось 45 дней</Sp_off_card_exp_date>
              </Sp_off_card_filler_top_text>
            </Sp_off_card_filler_top>
            <Sp_off_card_desc>
              Билеты от 499 рублей!<br />Специальное предложение от авиакомпании
              Победа
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
                <Sp_off_card_exp_date>Осталось 19 дней</Sp_off_card_exp_date>
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
            <Sp_off_card_head_text>В Лос-Анджелес от…</Sp_off_card_head_text>
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
                <Sp_off_card_exp_date>Осталось 19 дней</Sp_off_card_exp_date>
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
    </div>
  </Container>
);
