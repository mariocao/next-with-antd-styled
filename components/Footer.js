import styled from "styled-components";

const Footer = styled.div`
  grid-area: footer;
  background: gray;
`;

export default ({ children }) => (
  <Footer>
    <p>Footer</p>
  </Footer>
);
