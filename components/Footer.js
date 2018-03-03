import styled from "styled-components";

const Footer = styled.div`
  grid-area: footer;
  background: #555;
`;

const FooterText = styled.p`
  text-align: center;
  color: #ddd;
  font-family: "Avenir Roman", "proxima-nova", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
  margin: 8px;
`;

export default ({ children }) => (
  <Footer>
    <FooterText>2018 Mario Cao</FooterText>
  </Footer>
);
