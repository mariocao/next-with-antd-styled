import styled from "styled-components";

const Subtitle = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 26px;
  color: #333;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 120;
`;

const FlexList = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 10px;
  text-align: center;
  width: 160px;
`;

const Icon = styled.img`
  height: 50px;
  margin: 20px;
`;

class Features extends React.Component {
  render() {
    return (
      <section>
        <FlexList>
          <Card>
            <Icon src="static/img/features/build.png" />
            <Subtitle>Next.js Boilerplate</Subtitle>
          </Card>
          <Card>
            <Icon src="static/img/features/design.png" />
            <Subtitle>Customizable Ant Design</Subtitle>
          </Card>
          <Card>
            <Icon src="static/img/features/styled.png" />
            <Subtitle>Styled components</Subtitle>
          </Card>
          <Card>
            <Icon src="static/img/features/responsive.png" />
            <Subtitle>Built to be Responsive</Subtitle>
          </Card>
          <Card>
            <Icon src="static/img/features/extension.png" />
            <Subtitle>Easy to extend</Subtitle>
          </Card>
          <Card>
            <Icon src="static/img/features/hot.png" />
            <Subtitle>Performance</Subtitle>
          </Card>
        </FlexList>
      </section>
    );
  }
}

export default Features;
