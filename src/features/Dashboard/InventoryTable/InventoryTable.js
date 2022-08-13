import styled from "styled-components";
import Header from "./Header";

const InventoryTableContainer = styled.div`
  //   display: grid;
  //   grid-template-columns: 5% 30% 10% 5% 5% 20% 10% 10% 5%;
`;

export default function InventoryTable() {
  return (
    <InventoryTableContainer>
      <Header />
    </InventoryTableContainer>
  );
}
