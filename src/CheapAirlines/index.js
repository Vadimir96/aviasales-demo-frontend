import React from "react";
import SlideFirm1 from "./SlideFirm1.svg";
import SlideFirm2 from "./SlideFirm2.svg";
import SlideFirm3 from "./SlideFirm3.svg";
import SlideFirm4 from "./SlideFirm4.svg";
import SlideFirm5 from "./SlideFirm5.svg";
import LeftSlide from "./LeftSlide.svg";
import RightSlide from "./RightSlide.svg";

import {
  Container,
  Slider,
  HeaderText,
  SliderContent,
  CompanyLogos,
  SliderDisplay,
  SliderPosition,
  SlideDirection,
  SlideLogotypes
} from "./styled";

export default () => (
  <Container>
    <div className="container">
      <Slider>
        <SlideDirection src={LeftSlide} alt="left" direction />
        <HeaderText>
          Дешевые авиабилеты от крупнейших авиакомпаний и агентств
        </HeaderText>
        <SlideDirection src={RightSlide} alt="right" />
        <SliderContent>
          <CompanyLogos>
            <SlideLogotypes src={SlideFirm1} alt="SlideFirm" />
            <SlideLogotypes src={SlideFirm2} alt="SlideFirm" />
            <SlideLogotypes src={SlideFirm3} alt="SlideFirm" />
            <SlideLogotypes src={SlideFirm4} alt="SlideFirm" />
            <SlideLogotypes src={SlideFirm5} alt="SlideFirm" />
          </CompanyLogos>
          <SliderDisplay>
            <SliderPosition active />
            <SliderPosition />
            <SliderPosition />
          </SliderDisplay>
        </SliderContent>
      </Slider>
    </div>
  </Container>
);
