import styled from "styled-components";

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 30% 10% 5% 5% 20% 10% 10% 5%;
`;

const Col = styled.div`
  padding: 16px;
`;

export default function Row() {
  return <RowContainer></RowContainer>;
}
