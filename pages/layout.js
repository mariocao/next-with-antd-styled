import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; //repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    "logo title buttons"
  grid-gap: 10px;
  grid-column-gap: 10px;
  border-bottom: 1px solid black;
  top:0;
  position:fixed;
  width: 100vw;
  height: 50px;
  align-items: center;
  background: gray;
`;

const Content = styled.div`
  grid-area: content;
  justify-items: center;
  align-items: center;
  margin-top: 50px;
`;

const Footer = styled.div`
  grid-area: footer;
  background: gray;
`;

export default () => (
  <Wrapper>
    <Header>
      <div>Logo</div>
      <div>Title</div>
      <div>Buttons</div>
    </Header>
    <Content> Content </Content>
    <Footer> Footer </Footer>
  </Wrapper>
);
