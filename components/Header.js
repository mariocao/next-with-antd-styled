import styled from "styled-components";

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

export default ({ children }) => (
  <Header>
    <div>Logo</div>
    <div>Title</div>
    <div>Buttons</div>
  </Header>
);
