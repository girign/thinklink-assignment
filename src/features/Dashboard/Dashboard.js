import styled from "styled-components";

import { ReactComponent as AddIcon } from "../../assets/add.svg";
import ButtonWithIcon from "../../components/input/ButtonWithIcon";
import { SpaceBetweenRow } from "../../components/layout";
import SectionHeader from "../../components/SectionHeader";
import { COLOR_SUBTLE_TEXT } from "../../theme";
import InventoryTable from "./InventoryTable/InventoryTable";
import TotalSalesOverview from "./TotalSalesOverview";
import { ReactComponent as OpenOrdersIcon } from "../../assets/openOrders.svg";
import { ReactComponent as InTransitIcon } from "../../assets/inTransit.svg";
import { ReactComponent as FulfilledOrdersIcon } from "../../assets/fulfilledOrders.svg";
import { ReactComponent as CancelledOrdersIcon } from "../../assets/cancelledOrders.svg";
import { StatCard } from "../../components/surface";

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
  color: ${COLOR_SUBTLE_TEXT};
`;

const CardRow = styled(SpaceBetweenRow)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const orderCardStats = [
  {
    title: "Open orders",
    value: 239,
    icon: OpenOrdersIcon,
    topColor: "#FFAA2C",
  },
  {
    title: "Orders in transit",
    value: 126,
    icon: InTransitIcon,
    topColor: "#2C67FF",
  },
  {
    title: "Fulfilled orders",
    value: 1254,
    icon: FulfilledOrdersIcon,
    topColor: "#00CF3A",
  },
  {
    title: "Cancelled orders",
    value: 35,
    icon: CancelledOrdersIcon,
    topColor: "#FF1C1C",
  },
];

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Row>
        <BigGreyHeading>Overview</BigGreyHeading>
        <ButtonWithIcon label="ADD NEW WINE" icon={AddIcon} />
      </Row>
      <CardRow>
        {orderCardStats.map((stat, index) => (
          <StatCard {...stat} key={index} />
        ))}
      </CardRow>
      <SectionHeader>Sales detail</SectionHeader>
      {/* <Row> */}
      <TotalSalesOverview />
      {/* </Row> */}
      {/* <Row>
        <SectionHeader>Inventory</SectionHeader>
      </Row>
      <InventoryTable /> */}
    </DashboardContainer>
  );
}
