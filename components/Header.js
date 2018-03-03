import { Icon, Avatar, Badge } from "antd";
import styled from "styled-components";

const Header = styled.div`
grid-area: header;
display: grid;
grid-template-columns: auto 1fr auto;
grid-template-areas:
  "logo title buttons"
grid-gap: 10px;
grid-column-gap: 10px;
top:0;
position:fixed;
width: 100vw;
height: 60px;
align-items: center;
z-index: 10;
background: #FFF;
box-shadow: 0 1px 4px 0 rgba(13,26,44,.23);
padding-right: 10px;
padding-left: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 0px;
`;

export default ({ children }) => (
  <Header>
    <div>
      <Icon type="rocket" style={{ fontSize: 36, color: "#fa8c16" }} />
    </div>
    <Title>Acme Inc.</Title>
    <span>
      <Badge dot>
        <Avatar shape="circle" icon="user" />
      </Badge>
    </span>
  </Header>
);
