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

import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

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

const Content = styled.div`
  grid-area: content;
  justify-items: center;
  align-items: center;
  margin-top: 60px;
`;

export default ({ children, title }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Content> {children} </Content>
    <Footer />
  </Wrapper>
);
