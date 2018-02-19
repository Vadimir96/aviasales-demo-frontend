import styled from "styled-components";
export const Container = styled.div`
  background: #ffffff;
  padding: 30px 6px 10px;
  @media (min-width: 768px) {
    padding: 30px 8px 48px;
  }
`;
export const Article = styled.div``;
export const Card = styled.div``;
export const Head = styled.p`
  text-transform: uppercase;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
`;
export const Icon = styled.img`
  margin-right: 9px;
  box-sizing: border-box;
  vertical-align: top;
`;
export const Description = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
`;

export const Link = styled.a`
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
`;
