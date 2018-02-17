import React from "react";
import pobeda from "./img-2.png";
import lufthansa from "./img.png";
import lufthansalogo from "./img-1.png";

import {
  Container,
  InviteText,
  CardHolder,
  Card,
  CardHeader,
  CardInvite,
  CompanyLogo,
  Content,
  Offer,
  OfferText,
  CompanyLabel,
  PricePrefix,
  Price,
  ExpDate,
  OfferDescription,
  More,
  MoreCustomerInfo,
  AllOffers,
  PriceExplained
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <InviteText>Спецпредложения на&nbsp;авиабилеты</InviteText>
      <CardHolder>
        <Card>
          <CardHeader>
            <CardInvite>Билеты от 499 рублей!</CardInvite>
          </CardHeader>
          <Content>
            <Offer>
              <CompanyLabel src={pobeda} alt="logo" />
              <OfferText>
                <PricePrefix>
                  от&nbsp;
                  <Price>499 ₽</Price>
                </PricePrefix>
                <ExpDate>Осталось 45 дней</ExpDate>
              </OfferText>
            </Offer>
            <OfferDescription>
              Билеты от 499 рублей!<br />Специальное предложение от авиакомпании
              Победа
            </OfferDescription>
            <More>Узнать подробности</More>
          </Content>
        </Card>
        <Card>
          <CardHeader>
            <CardInvite>В Нью-Йорк от 20 680 ₽</CardInvite>
            <CompanyLogo src={lufthansalogo} alt="logo" />
          </CardHeader>
          <Content>
            <Offer>
              <CompanyLabel src={lufthansa} alt="logo" />
              <OfferText>
                <PricePrefix>
                  от&nbsp;
                  <Price>20 680 ₽</Price>
                </PricePrefix>
                <ExpDate>Осталось 19 дней</ExpDate>
              </OfferText>
            </Offer>
            <OfferDescription>
              Из Москвы в США от 20680 рублей! Специальное предложение от
              авиакомпании Lufthansa
            </OfferDescription>
            <More>Узнать подробности</More>
          </Content>
        </Card>
        <Card>
          <CardHeader>
            <CardInvite>В Лос-Анджелес от…</CardInvite>
            <CompanyLogo src={lufthansalogo} alt="logo" />
          </CardHeader>
          <Content>
            <Offer>
              <CompanyLabel src={lufthansa} alt="logo" />
              <OfferText>
                <PricePrefix>
                  от&nbsp;
                  <Price>20 360 ₽</Price>
                </PricePrefix>
                <ExpDate>Осталось 19 дней</ExpDate>
              </OfferText>
            </Offer>
            <OfferDescription>
              Из Москвы в США от 22360 рублей! Специальное предложение от
              авиакомпании Lufthansa
            </OfferDescription>
            <More>Узнать подробности</More>
          </Content>
        </Card>
      </CardHolder>
      <MoreCustomerInfo>
        <AllOffers>Смотреть все спецпредложения</AllOffers>
        <PriceExplained>* средняя цена по направлению</PriceExplained>
      </MoreCustomerInfo>
    </div>
  </Container>
);
