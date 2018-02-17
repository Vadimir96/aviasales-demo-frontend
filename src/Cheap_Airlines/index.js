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
  AirlinesBlock,
  AirlinesHeader,
  AirlinesBlockContent,
  AirlinesSlideOne,
  AirlinesSlideNav,
  AirlinesSlideNavOl,
  AirlinesSlideDirection,
  AirlinesSlideLogotypes
} from "./styled";

export default () => (
  <Container>
    <div className="container">
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
    </div>
  </Container>
);
