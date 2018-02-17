import React from "react";
import star from "./star.svg";
import appleico from "./appleicon.svg";
import androidico from "./androidicon.svg";
import winico from "./winicon.svg";

import {
  Container,
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
} from "./styled";

export default () => (
  <Container>
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
  </Container>
);
