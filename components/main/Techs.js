import styled from "styled-components";

const FlexList = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 80px;
  margin: 20px;
`;

class Features extends React.Component {
  render() {
    return (
      <section>
        <FlexList>
          <Logo style={{height: "100px"}} src="static/img/nextjs.png" />
          <Logo src="static/img/react.png" />
          <Logo src="static/img/antd.png" />
          <Logo src="static/img/styled.png" />
        </FlexList>
      </section>
    );
  }
}

export default Features;
