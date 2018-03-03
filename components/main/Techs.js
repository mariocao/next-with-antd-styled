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
      <section style={{ borderTop: "1px solid #c1ebf5" }}>
        <FlexList>
          <Logo style={{ height: "100px" }} src="static/img/logos/nextjs.png" />
          <Logo src="static/img/logos/react.png" />
          <Logo src="static/img/logos/antd.png" />
          <Logo src="static/img/logos/styled.png" />
        </FlexList>
      </section>
    );
  }
}

export default Features;
