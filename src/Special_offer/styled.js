import styled from "styled-components";
export const Container = styled.div`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  padding: 16px 6px 24px 6px;

  @media (min-width: 768px) {
    padding: 16px 8px 24px 8px;
  }
`;

export const Sp_off_h_text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;

  color: #ffffff;
`;

export const Sp_off_cardholder = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Sp_off_card = styled.div`
  width: inherit;
  margin: 0 0 12px 0;
  width: 308px;
  @media (min-width: 768px) {
    width: 240px;
    margin-right: 2%;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Sp_off_card_header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px 13px 16px;
  width: auto;
  background-color: #cd2027;
`;

export const Sp_off_card_head_text = styled.p`
  margin: 10px auto 8px 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Sp_off_card_header_pic = styled.img``;

export const Sp_off_card_filler = styled.div`
  background-color: #ffffff;
  padding: 0 8px 16px 8px;
`;

export const Sp_off_card_filler_top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Sp_off_card_filler_top_text = styled.div``;

export const Sp_off_card_pic = styled.img`
  margin: 22px 0 0 8px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const Sp_off_card_prefix = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  text-align: right;
  line-height: 16px;
  font-size: 12px;
  margin: 20px 0 0 0;

  color: #5c5c5c;
`;

export const Sp_off_card_price = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 20px;

  color: #5c5c5c;
  margin: 18px 8px 0 0;
`;

export const Sp_off_card_exp_date = styled.p`
  margin: 8px 8px 0 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;

  color: #d93633;
`;

export const Sp_off_card_desc = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  margin: 15px 0 0 0;

  color: #242424;
`;

export const Sp_off_card_button = styled.button`
  margin: 27px 0 0 0;
  padding: 10px 0 10px 0;
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #d93533;
`;

export const Sp_off_text_below = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const Sp_off_link_below = styled.a`
  margin: 20px 28px 8px 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;

  color: #ffffff;
  @media (min-width: 768px) {
    margin: 0px 28px 8px 28px;
  }
`;

export const Sp_off_text_below_starred = styled.p`
  margin: 0 26px 0 26px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;

  color: #ffffff;
`;
