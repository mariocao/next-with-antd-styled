import styled from "styled-components";
import Features from "./Features";
import Techs from "./Techs";
import SampleForm from "./SampleForm";

const BackgroundImage = styled.div`
  padding: 20px;
  background: url(static/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Title = styled.h1`
  padding: 20px;
  text-align: center;
  font-size: 64px;
  line-height: 74px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: "Flama Light", "proxima-nova", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: 100;
`;

class Main extends React.Component {
  render() {
    return (
      <main>
        <BackgroundImage>
          <Title>
            Welcome to our<br />Landing page!
          </Title>
          <SampleForm />
        </BackgroundImage>
        <Techs />
      </main>
    );
  }
}

export default Main;
