import styled from "styled-components";

import { ReactComponent as AddIcon } from "../../assets/add.svg";
import ButtonWithIcon from "../../components/input/ButtonWithIcon";
import Checkbox from "../../components/input/Checkbox";
import {
  MainFigure,
  ProfitFigure,
  SectionHeader,
  TrendFigure,
} from "../../components/typography";
import InventoryTable from "./InventoryTable/InventoryTable";
import TotalSalesOverview from "./TotalSalesOverview";

const DashboardContainer = styled.div`
  padding: 16px 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigGreyHeading = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #8c8ca1;
`;

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Row>
        <BigGreyHeading>Overview</BigGreyHeading>
        <ButtonWithIcon label="ADD NEW WINE" icon={AddIcon} />
      </Row>
      <Row>
        <SectionHeader>Sales detail</SectionHeader>
        <MainFigure>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(100000000)}
        </MainFigure>
      </Row>
      <Row>
        <TotalSalesOverview />
      </Row>
      <Row>
        <SectionHeader>Inventory</SectionHeader>
      </Row>
      <InventoryTable />
    </DashboardContainer>
  );
}
