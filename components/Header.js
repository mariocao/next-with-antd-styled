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

const ForkMe = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
`;

export default ({ children }) => (
  <Header>
    <div>
      <Icon type="rocket" style={{ fontSize: 36, color: "#fa8c16" }} />
    </div>
    <Title>Rocket Inc.</Title>
    <span>
      <Badge dot>
        <Avatar shape="circle" icon="user" />
      </Badge>
    </span>
    <a href="https://github.com/mariocao/next-with-antd-styled">
      <ForkMe
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
        alt="Fork me on GitHub"
      />
    </a>
  </Header>
);
