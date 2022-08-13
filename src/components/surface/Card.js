import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0px -2px 0px #ffaa2c, 0px 2px 11px rgba(0, 0, 0, 0.06);
  filter: drop-shadow(0, -2, 0, ${(props) => props.topColor});
  padding: 16px;
`;

export default Card;
