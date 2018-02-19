import React from "react";
import twitdispatch from "./twitdispatch.svg";
import facedispatch from "./facedispatch.svg";
import vkdispatch from "./vkdispatch.svg";
import invdispatch from "./invdispatch.svg";

import {
  Container,
  DispatchBlock,
  OverflowBlock,
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
} from "./styled";

export default () => (
  <Container>
    <OverflowBlock>
      <div className="container">
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
      </div>
    </OverflowBlock>
  </Container>
);
