import React from "react";
import twitdispatch from "./twitdispatch.svg";
import facedispatch from "./facedispatch.svg";
import vkdispatch from "./vkdispatch.svg";
import invdispatch from "./invdispatch.svg";

import {
  Container,
  InviteText,
  OverflowBlock,
  TextBlock,
  Header,
  HowToSubscribe,
  SocialMedia,
  ListUnit,
  Link,
  LinkImg,
  SendBlock,
  Email,
  Submit,
  SubmitButton
} from "./styled";

export default () => (
  <Container>
    <OverflowBlock>
      <div className="container">
        <InviteText>
          <TextBlock>
            <Header>Хотите знать всё о скидках на авиабилеты?</Header>
            <HowToSubscribe>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </HowToSubscribe>
          </TextBlock>
          <SocialMedia>
            <ListUnit>
              <Link>
                <LinkImg src={twitdispatch} />
              </Link>
            </ListUnit>
            <ListUnit>
              <Link>
                <LinkImg src={facedispatch} />
              </Link>
            </ListUnit>
            <ListUnit>
              <Link>
                <LinkImg src={vkdispatch} />
              </Link>
            </ListUnit>
            <ListUnit>
              <Link>
                <LinkImg src={invdispatch} />
              </Link>
            </ListUnit>
          </SocialMedia>
          <SendBlock>
            <Submit>
              <Email placeholder="Ваш email" />
              <SubmitButton>Подписаться</SubmitButton>
            </Submit>
          </SendBlock>
        </InviteText>
      </div>
    </OverflowBlock>
  </Container>
);
